export type ContactUsType = {
    initialValues: ContactUsChildren;
    validationSchema: any;
    onSubmit: (values: ContactUsChildren) => void;
  };
  
  export type ContactUsChildren = {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    queryType?: string; 
  };