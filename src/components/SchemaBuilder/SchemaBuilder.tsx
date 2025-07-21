import React from 'react';
import { Card, Tabs, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FormProvider, useForm } from 'react-hook-form';
import FieldRow from './FieldRow';
import JsonPreview from './JsonPreview';
import { useSchemaBuilder } from '../../hooks/useSchemaBuilder';

const { TabPane } = Tabs;

const SchemaBuilder: React.FC = () => {
  const methods = useForm();
  const {
    schemaData,
    addField,
    updateField,
    deleteField,
    addNestedField
  } = useSchemaBuilder();

  return (
    <FormProvider {...methods}>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Card title="JSON Schema Builder" style={{ marginBottom: '20px' }}>
          <Tabs defaultActiveKey="builder" type="card">
            <TabPane tab="Schema Builder" key="builder">
              <div style={{ marginBottom: '16px' }}>
                <Button 
                  type="primary" 
                  icon={<PlusOutlined />} 
                  onClick={addField}
                >
                  Add Field
                </Button>
              </div>
              
              <Space direction="vertical" style={{ width: '100%' }} size="middle">
                {schemaData.fields.map((field) => (
                  <FieldRow
                    key={field.id}
                    field={field}
                    onUpdate={updateField}
                    onDelete={deleteField}
                    onAddNested={addNestedField}
                    level={0}
                  />
                ))}
              </Space>
            </TabPane>
            
            <TabPane tab="JSON Preview" key="json">
              <JsonPreview schemaData={schemaData} />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </FormProvider>
  );
};

export default SchemaBuilder;
