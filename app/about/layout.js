'use client';
export default function AboutLayout({ children }) {
  return (
    <div>
      <div>{children}</div>

      <div className='mt-8'>
        <h2 className='mb-4 text-xl'>Yout might also like</h2>
        <ul>
          <li>first blog</li>
          <li>second blog</li>
        </ul>
      </div>
    </div>
  );
}
