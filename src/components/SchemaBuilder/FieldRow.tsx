import React from 'react';
import { Card, Input, Select, Button, Space, Divider } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { FieldRowProps } from '../../types/schema';
import NestedFields from './NestedFields';

const { Option } = Select;

const FieldRow: React.FC<FieldRowProps> = ({
  field,
  onUpdate,
  onDelete,
  onAddNested,
  level = 0
}) => {
  const handleKeyChange = (value: string) => {
    onUpdate(field.id, { key: value });
  };

  const handleTypeChange = (value: 'string' | 'number' | 'nested') => {
    const updates: any = { type: value };
    
    if (value === 'string') {
      updates.defaultValue = '';
      updates.nested = undefined;
    } else if (value === 'number') {
      updates.defaultValue = 0;
      updates.nested = undefined;
    } else if (value === 'nested') {
      updates.defaultValue = undefined;
      updates.nested = [];
    }
    
    onUpdate(field.id, updates);
  };

  const handleDefaultValueChange = (value: any) => {
    onUpdate(field.id, { defaultValue: value });
  };

  const marginLeft = level * 20;

  return (
    <Card 
      size="small" 
      style={{ 
        marginLeft: `${marginLeft}px`,
        border: level > 0 ? '1px dashed #d9d9d9' : '1px solid #d9d9d9'
      }}
    >
      <Space direction="vertical" style={{ width: '100%' }} size="small">
        <Space style={{ width: '100%' }} align="center">
          <div style={{ minWidth: '120px' }}>
            <label style={{ fontWeight: 500 }}>Field Key:</label>
          </div>
          <Input
            placeholder="Enter field key"
            value={field.key}
            onChange={(e) => handleKeyChange(e.target.value)}
            style={{ flex: 1, maxWidth: '200px' }}
          />
          
          <div style={{ minWidth: '80px' }}>
            <label style={{ fontWeight: 500 }}>Type:</label>
          </div>
          <Select
            value={field.type}
            onChange={handleTypeChange}
            style={{ width: '120px' }}
          >
            <Option value="string">String</Option>
            <Option value="number">Number</Option>
            <Option value="nested">Nested</Option>
          </Select>

          {field.type !== 'nested' && (
            <>
              <div style={{ minWidth: '100px' }}>
                <label style={{ fontWeight: 500 }}>Default Value:</label>
              </div>
              {field.type === 'string' ? (
                <Input
                  placeholder="Default string value"
                  value={field.defaultValue || ''}
                  onChange={(e) => handleDefaultValueChange(e.target.value)}
                  style={{ width: '150px' }}
                />
              ) : (
                <Input
                  type="number"
                  placeholder="Default number value"
                  value={field.defaultValue || 0}
                  onChange={(e) => handleDefaultValueChange(Number(e.target.value) || 0)}
                  style={{ width: '150px' }}
                />
              )}
            </>
          )}
          
          <Space>
            {field.type === 'nested' && (
              <Button
                type="dashed"
                icon={<PlusOutlined />}
                size="small"
                onClick={() => onAddNested(field.id)}
              >
                Add Nested
              </Button>
            )}
            <Button
              type="text"
              danger
              icon={<DeleteOutlined />}
              size="small"
              onClick={() => onDelete(field.id)}
            />
          </Space>
        </Space>

        {field.type === 'nested' && field.nested && field.nested.length > 0 && (
          <>
            <Divider style={{ margin: '8px 0' }} />
            <NestedFields
              fields={field.nested}
              onUpdate={onUpdate}
              onDelete={onDelete}
              onAddNested={onAddNested}
              level={level + 1}
            />
          </>
        )}
      </Space>
    </Card>
  );
};

export default FieldRow;
