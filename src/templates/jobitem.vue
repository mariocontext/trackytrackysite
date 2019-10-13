<page-query>
    query Jobs ($path: String!) {
    joblisting (path: $path) {
        Title
        City
    }
    }
</page-query>