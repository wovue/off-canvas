import HomePage from 'src-docs/app/pages/HomePage'
import HomeDefaultPage from 'src-docs/app/pages/HomeDefaultPage'
import HomeUsagePage from 'src-docs/app/pages/HomeUsagePage'
import HomeApiPage from 'src-docs/app/pages/HomeApiPage'
import ExamplesPage from 'src-docs/app/pages/ExamplesPage'
import ExamplesDefaultPage from 'src-docs/app/pages/ExamplesDefaultPage'
import ExamplesRealWorldPage from 'src-docs/app/pages/ExamplesRealWorldPage'
import DocsExamplePage from 'src-docs/app/pages/DocsExamplePage'
import DocsMarkdownExamplePage from 'src-docs/app/pages/DocsMarkdownExamplePage'

export const routes = {
  '/': {
    name: 'Home',
    component: HomePage,
    subRoutes: {
      '/': {
        name: 'HomeDefaultPage',
        component: HomeDefaultPage
      },
      '/usage': {
        name: 'HomeUsagePage',
        component: HomeUsagePage
      },
      '/api': {
        name: 'HomeApiPage',
        component: HomeApiPage
      }
    }
  },
  '/examples': {
    name: 'Examples',
    component: ExamplesPage,
    subRoutes: {
      '/': {
        name: 'ExamplesDefaultPage',
        component: ExamplesDefaultPage
      },
      '/real-world': {
        name: 'ExamplesRealWorldPage',
        component: ExamplesRealWorldPage
      }
    }
  },
  '/docs-example': {
    name: 'DocsExample',
    component: DocsExamplePage
  },
  '/docs-markdown-example': {
    name: 'DocsMarkdownExample',
    component: DocsMarkdownExamplePage
  }
}
