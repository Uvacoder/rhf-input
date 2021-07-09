import { classNames } from '@/lib/helper';
import UnstyledLink from './UnstyledLink';

export default function CustomLink({ children, className = '', ...rest }) {
  return (
    <UnstyledLink
      {...rest}
      className={classNames(
        'inline-flex items-center font-bold hover:text-primary-500 focus:hover:text-primary-500 animated-underline',
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}