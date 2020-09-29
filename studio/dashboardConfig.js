export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f73bf962c109318a8b99248',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ccqp81wp',
                  apiId: '5dc99bfb-84f1-4254-af37-b4e8db8fb3cb'
                },
                {
                  buildHookId: '5f73bf96ee08ad184cead901',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-s693adow',
                  apiId: '966408b9-bb1b-43be-a90c-c685dfbbf7a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ortizlu/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-s693adow.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
