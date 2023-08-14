import { Suspense } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <div>
      <header>
       <Header/>
      </header>
      <main>
        <Suspense
          fallback={
            <div>
              <MutatingDots
                height="100"
                width="100"
                color="#5800a5"
                secondaryColor="#e08e00"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
