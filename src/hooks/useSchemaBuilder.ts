import { useState } from 'react';
import { SchemaField, SchemaData } from '../types/schema';
import { createDefaultField } from '../utils/schemaUtils';

export const useSchemaBuilder = () => {
  const [schemaData, setSchemaData] = useState<SchemaData>({
    fields: [createDefaultField()]
  });

  const addField = () => {
    setSchemaData(prev => ({
      ...prev,
      fields: [...prev.fields, createDefaultField()]
    }));
  };

  const updateFieldById = (fields: SchemaField[], id: string, updates: Partial<SchemaField>): SchemaField[] => {
    return fields.map(field => {
      if (field.id === id) {
        return { ...field, ...updates };
      }
      if (field.nested) {
        return {
          ...field,
          nested: updateFieldById(field.nested, id, updates)
        };
      }
      return field;
    });
  };

  const deleteFieldById = (fields: SchemaField[], id: string): SchemaField[] => {
    return fields.filter(field => {
      if (field.id === id) {
        return false;
      }
      if (field.nested) {
        field.nested = deleteFieldById(field.nested, id);
      }
      return true;
    });
  };

  const addNestedFieldById = (fields: SchemaField[], parentId: string): SchemaField[] => {
    return fields.map(field => {
      if (field.id === parentId && field.type === 'nested') {
        return {
          ...field,
          nested: [...(field.nested || []), createDefaultField()]
        };
      }
      if (field.nested) {
        return {
          ...field,
          nested: addNestedFieldById(field.nested, parentId)
        };
      }
      return field;
    });
  };

  const updateField = (id: string, updates: Partial<SchemaField>) => {
    setSchemaData(prev => ({
      ...prev,
      fields: updateFieldById(prev.fields, id, updates)
    }));
  };

  const deleteField = (id: string) => {
    setSchemaData(prev => ({
      ...prev,
      fields: deleteFieldById(prev.fields, id)
    }));
  };

  const addNestedField = (parentId: string) => {
    setSchemaData(prev => ({
      ...prev,
      fields: addNestedFieldById(prev.fields, parentId)
    }));
  };

  return {
    schemaData,
    addField,
    updateField,
    deleteField,
    addNestedField
  };
};
