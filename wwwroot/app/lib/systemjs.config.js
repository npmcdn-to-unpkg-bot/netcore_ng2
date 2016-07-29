/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'app/lib/@angular',
    'angular2-in-memory-web-api': 'app/lib/angular2-in-memory-web-api',
    'rxjs':                       'app/lib/rxjs',
    'primeng':                    'app/lib/primeng',
    '@angular2-material':          'app/lib/@angular2-material'  
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'primeng':                    { defaultExtension: 'js' },
    '@angular2-material':          { defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  
  //-----------------------------material
  var materialPkgs = [
    'core',
    'button',
    'list',
    'input',
    'icon',
  ];

  function packMaterial(pkgName) {
    packages['@angular2-material/' + pkgName] = { main: pkgName + '.js', defaultExtension: 'js'};
  }

  var setMaterialConfig = packMaterial;
  materialPkgs.forEach(setMaterialConfig);
  //-----------------------material
  
  
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  // function packUmd(pkgName) {
  //   packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  // }
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
