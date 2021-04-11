import { ENDPOINTS } from '@/routes/api-endpoints';
import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export type Medicine = {
  medicineID: number;
  userID: number | null; // TODO fix null
  medicineSeq: number;
  medicineName: string;
  medicineMemo: string;
  createdAt: Date;
  updatedAt: Date;
};

export type BodyPart = {
  userID: number | null; // TODO fix null
  bodyPartsID: number;
  bodyPartsSeq: number;
  bodyPartsName: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Image = {
  imagePath: string;
  imageID: number;
  imageSeq: number;
};

export type PainRecord = {
  painRecordID: number;
  userID: number;
  painLevel: number;
  medicineList: Medicine[];
  bodyPartList: BodyPart[];
  imageList: Image[];
  memo: string;
  createdAt: Date;
  updatedAt: Date;
};

export const usePainRecord = async (
  painRecordID: number,
): Promise<PainRecord> => {
  const endPoint: string = `${ENDPOINTS.GET.PAIN_RECORD}${painRecordID}`;
  return (await axios.get(endPoint)).data;
};

export const useEmptyPainRecord = (): PainRecord => {
  const painRecord: PainRecord = {
    painRecordID: 0,
    userID: 0,
    painLevel: 0,
    medicineList: [],
    bodyPartList: [],
    imageList: [],
    memo: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  return painRecord;
};
