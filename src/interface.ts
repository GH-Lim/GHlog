import { PageProps } from 'gatsby';

export type ITemplateProps<T> = PageProps & {
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
  } & T;
};
