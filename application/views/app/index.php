<html>

<head>
    <title>Angular 2 y Codeigniter 3</title>

    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.js"></script>
    <script src="node_modules/angular2/bundles/router.js"></script>


    <script>
        System.config({
            packages: {
                'angular-app': {
                    format: 'register',
                    defaultExtension: 'js'
                }
            }
        });
        System.import('angular-app/boot')
                .then(null, console.error.bind(console));
    </script>

</head>

<body>
    <angular2-codeigniter>Loading...</angular2-codeigniter>
</body>

</html>