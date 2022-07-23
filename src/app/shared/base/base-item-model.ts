export abstract class BaseItemModel {
  uid: string;
  id: number;

  createdBy?: string;
  updatedBy: string;

  isActive: boolean;
  isArchived: boolean;
  internalComment: string | null;

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
