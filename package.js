Package.describe({
  name: "mikkelking:factory",
  summary: "Factories for Meteor",
  version: "3.0.1",
  git: "https://github.com/Back2Dev/meteor-factory.git",
})

Package.onUse(function (api) {
  api.versionsFrom(["2.0", "3.0"])
  api.use(["ecmascript", "minimongo", "underscore", "ejson", "random"])
  api.addFiles("factory.js")
  api.export("Factory")
})

Package.onTest(function (api) {
  api.use(["ecmascript", "tinytest", "mikkelking:factory", "underscore"])
  api.addFiles("factory_tests.js", "server")
})
