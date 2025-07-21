import React from 'react';
import { Space } from 'antd';
import FieldRow from './FieldRow';
import { SchemaField } from '../../types/schema';

interface NestedFieldsProps {
  fields: SchemaField[];
  onUpdate: (id: string, updates: Partial<SchemaField>) => void;
  onDelete: (id: string) => void;
  onAddNested: (parentId: string) => void;
  level: number;
}

const NestedFields: React.FC<NestedFieldsProps> = ({
  fields,
  onUpdate,
  onDelete,
  onAddNested,
  level
}) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size="small">
      {fields.map((field) => (
        <FieldRow
          key={field.id}
          field={field}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onAddNested={onAddNested}
          level={level}
        />
      ))}
    </Space>
  );
};

export default NestedFields;
