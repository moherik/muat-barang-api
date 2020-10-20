export const serviceResponse = (ref: {
  code: number;
  status: string;
  data: Array<Object> | Object | null | string | undefined;
}) => {
  return {
    code: ref.code,
    status: ref.status,
    data: ref.data,
  };
};
