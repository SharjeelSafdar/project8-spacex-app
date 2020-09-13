module.exports = {
    schema: [ "http://api.spacex.land/graphql/" ],
    documents: ["./src/api/*.graphql"],
    overwrite: true,
    generates: {
        './src/api/index.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
                apolloReactHooksImportFrom: "@apollo/client"
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};