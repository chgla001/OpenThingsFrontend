// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  folderlist: [{
    id: 1,
    foldername: 'Home',
    children: [{
      id: 2,
      foldername: 'foldername'
    },
    {
      id: 3,
      foldername: 'foldername'
    }]
  },
  {
    id: 4,
    foldername: 'Work',
    children: [
      { id: 5, foldername: 'foldername' },
      { id: 6, foldername: 'foldername' }
    ]
  }],
  notelist: [{
    id: 1,
    title: 'note title 1',
    date: '19.04.2018'
  },
  {
    id: 2,
    title: 'note title 2',
    date: '19.04.2018'
  },
  {
    id: 3,
    title: 'note title 3',
    date: '19.04.2018'
  },
  {
    id: 4,
    title: 'note title 4',
    date: '19.04.2018'
  },
  {
    id: 5,
    title: 'note title 5',
    date: '19.04.2018'
  }]
};
