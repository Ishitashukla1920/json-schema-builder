import { SchemaField } from '../types/schema';

export const generateUniqueId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const createDefaultField = (): SchemaField => {
  return {
    id: generateUniqueId(),
    key: '',
    type: 'string',
    defaultValue: ''
  };
};
