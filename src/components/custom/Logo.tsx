import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  const imageSize = 32;

  return (
    <Link
      href='/'
      className='shadow-logo w-fit'
    >
      <Image
        src='/logo.svg'
        alt='logo'
        width={imageSize}
        height={imageSize}
      />
    </Link>
  );
}
