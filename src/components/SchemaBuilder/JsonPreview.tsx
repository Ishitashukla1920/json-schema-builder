import React from 'react';
import { Card } from 'antd';
import { SchemaData, SchemaField } from '../../types/schema';

interface JsonPreviewProps {
  schemaData: SchemaData;
}

const JsonPreview: React.FC<JsonPreviewProps> = ({ schemaData }) => {
  const generateJsonSchema = (fields: SchemaField[]): any => {
    const schema: any = {};
    
    fields.forEach(field => {
      if (field.key.trim()) {
        if (field.type === 'nested' && field.nested) {
          schema[field.key] = generateJsonSchema(field.nested);
        } else {
          schema[field.key] = field.defaultValue;
        }
      }
    });
    
    return schema;
  };

  const jsonOutput = generateJsonSchema(schemaData.fields);

  return (
    <Card title="Generated JSON Schema" style={{ height: '500px', overflow: 'auto' }}>
      <pre style={{ 
        background: '#f6f8fa',
        border: '1px solid #e1e8ed',
        borderRadius: '6px',
        padding: '16px',
        fontSize: '14px',
        lineHeight: '1.5',
        margin: 0,
        overflow: 'auto',
        fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace'
      }}>
        {JSON.stringify(jsonOutput, null, 2)}
      </pre>
    </Card>
  );
};

export default JsonPreview;
