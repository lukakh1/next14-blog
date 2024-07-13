import { Suspense } from 'react';
import ProjectList from './components/project-list';
import ProjectListLoading from './components/project-list-loading';
import { ErrorBoundary } from 'react-error-boundary';
import H1 from '@/components/h1';
export default async function ProjectsPage() {
  return (
    <div className=''>
      <H1>Projects</H1>
      <ErrorBoundary fallback={<div>somethiing is wrong</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
