export interface SchemaField {
  id: string;
  key: string;
  type: 'string' | 'number' | 'nested';
  defaultValue?: any;
  nested?: SchemaField[];
}

export interface SchemaData {
  fields: SchemaField[];
}

export interface FieldRowProps {
  field: SchemaField;
  onUpdate: (id: string, updates: Partial<SchemaField>) => void;
  onDelete: (id: string) => void;
  onAddNested: (parentId: string) => void;
  level?: number;
}
