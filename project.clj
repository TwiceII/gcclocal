(defproject gcclocal "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/data.xml "0.0.8"]
                 [clj-time "0.12.0"]
                 [ring "1.5.0"]
                 [ring/ring-defaults "0.2.1"]
                 [ring/ring-json "0.4.0"]
                 [ring/ring-mock "0.3.0"]
                 [ring/ring-codec "1.0.1"]
                 [bk/ring-gzip "0.1.1"]
                 [ring.middleware.logger "0.5.0"]
                 [compojure "1.5.0"]
                 [selmer "1.0.7"]
                 [environ "1.0.2"]
                 [org.clojure/java.jdbc "0.4.1"]
                 [org.postgresql/postgresql "9.4-1201-jdbc41"]
                 [honeysql "0.6.3"]
                 [com.taoensso/timbre "4.7.0"]
                 [spyscope "0.1.5"]
                 [com.cognitect/transit-cljs "0.8.237"]
                 [org.clojure/data.zip "0.1.2"]
                 [jarohen/chime "0.1.9"]
                 [expectations "2.1.8"]
                 [dk.ative/docjure "1.11.0"]

                 ; cljs
                 [org.clojure/clojurescript "1.9.89" :scope "provided"]
                 [org.clojure/core.async "0.2.374"
                  :exclusions [org.clojure/tools.reader]]
                 [rum "0.8.3"]
                 [cljs-ajax "0.5.4"]]

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-expectations "0.0.7"]
            [lein-autoexpect "1.9.0"]
            [lein-environ "1.0.1"]]

  :min-lein-version "2.6.1"

  :source-paths ["src/clj" "src/cljs" "dev"]

  :test-paths ["test/clj"]

  ;:clean-targets ^{:protect false} [:target-path :compile-path]
  :clean-targets ^{:protect false} [:target-path
                                    :compile-path
                                    "target/cljsbuild-main.js"
                                    "resources/public/js/compiled/"]

  :uberjar-name "gcclocal.jar"

  ;; Use `lein run` if you just want to start a HTTP server, without figwheel
  :main gcclocal.server

  ;; nREPL by default starts in the :main namespace, we want to start in `user`
  ;; because that's where our development helper functions like (run) and
  ;; (browser-repl) live.
  :repl-options {:init-ns user}

  :cljsbuild {:builds
              {; билд для разработки
              :dev
               {:source-paths ["src/cljs/gcclocal"]
                :figwheel true
                :compiler {;:main gcclocal.comm.utils
                           ;:asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/app.js"
                           :output-dir "resources/public/js/compiled/out"
                           :optimizations :none
                           :source-map true
                           :pretty-print true}}
               ; билд для продакшена
               :prod
               {:source-paths ["src/cljs/gcclocal"]

                :compiler {:externs ["resources/public/js/externs.js"]
                           :optimizations :advanced
                           :modules {:cljs-base
                                     {:output-to "resources/public/js/compiled/cljs-b.js"}

                                     :common-module
                                     {:output-to "resources/public/js/compiled/common-module.js"
                                      :entries #{"gcclocal.comm.pagination"
                                                 "gcclocal.comm.amethods"
                                                 "gcclocal.comm.channels"
                                                 "gcclocal.comm.dom-utils"
                                                 "gcclocal.comm.utils"
                                                 }}

                                     :main-app
                                     {:output-to "resources/public/js/compiled/main-app.js"
                                      :entries #{"gcclocal.main.login"}
                                      :depends-on #{:common-module}}

                                     :base-crud
                                     {:output-to "resources/public/js/compiled/base-crud.js"
                                      :entries #{"gcclocal.views.basic-catalog-crud-table"
                                                 "gcclocal.views.common"
                                                 "gcclocal.views.crud-fields"
                                                 "gcclocal.views.crud-views"}
                                      :depends-on #{:common-module}}

                                     :cruds
                                     {:output-to "resources/public/js/compiled/entity-crud.js"
                                      :entries #{"gcclocal.catalogs.clients"
                                                 "gcclocal.catalogs.suppliers"
                                                 "gcclocal.catalogs.goods"
                                                 "gcclocal.catalogs.stations"
                                                 "gcclocal.catalogs.stationtraveltimes"
                                                 "gcclocal.primarydocs.clientapplications"
                                                 "gcclocal.primarydocs.clientcontracts"
                                                 "gcclocal.primarydocs.departurelogistinfos"
                                                 "gcclocal.primarydocs.departures"
                                                 "gcclocal.primarydocs.factclientpayments"
                                                 "gcclocal.primarydocs.initbalanceondate"
                                                 "gcclocal.primarydocs.initclientincomes"}
                                      :depends-on #{:common-module :base-crud}}

                                     :diagrams
                                     {:output-to "resources/public/js/compiled/diagrams.js"
                                      :entries #{"gcclocal.diagrams.moneyincomes"
                                                 "gcclocal.diagrams.moneyincomes-calc"}
                                      :depends-on #{:common-module :base-crud}}

                                     }}}

              }}

  ;; When running figwheel from nREPL, figwheel will read this configuration
  ;; stanza, but it will read it without passing through leiningen's profile
  ;; merging. So don't put a :figwheel section under the :dev profile, it will
  ;; not be picked up, instead configure figwheel here on the top level.

  :figwheel {;; :http-server-root "public"       ;; serve static assets from resources/public/
             :server-port 3450                ;; default
             ;; :server-ip "127.0.0.1"           ;; default
             :css-dirs ["resources/public/css"]  ;; watch and update CSS

             ;; Instead of booting a separate server on its own port, we embed
             ;; the server ring handler inside figwheel's http-kit server, so
             ;; assets and API endpoints can all be accessed on the same host
             ;; and port. If you prefer a separate server process then take this
             ;; out and start the server with `lein run`.
             :ring-handler user/http-handler

             ;; Start an nREPL server into the running figwheel process. We
             ;; don't do this, instead we do the opposite, running figwheel from
             ;; an nREPL process, see
             ;; https://github.com/bhauman/lein-figwheel/wiki/Using-the-Figwheel-REPL-within-NRepl
             ;; :nrepl-port 7888

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             :server-logfile "log/figwheel.log"}

  :doo {:build "test"}

  :profiles {:dev
             {:dependencies [[figwheel "0.5.2"]
                             [figwheel-sidecar "0.5.2"]
                             [com.cemerick/piggieback "0.2.1"]
                             [org.clojure/tools.nrepl "0.2.12"]]

              :plugins [[lein-figwheel "0.5.2"]
                        [lein-doo "0.1.6"]]

              :cljsbuild {:builds
                          {:test
                           {:source-paths ["src/cljs" "test/cljs"]
                            :compiler
                            {:output-to "resources/public/js/compiled/testable.js"
                             :main gcclocal.test-runner
                             :optimizations :none}}}}}

             :uberjar
             {:source-paths ^:replace ["src/clj"]
              ;:hooks [leiningen.cljsbuild]
              :prep-tasks ["compile" ["cljsbuild" "once" "prod"]]
              :omit-source true
              :aot :all
              :cljsbuild {:builds
                          {:app
                           {:source-paths ^:replace ["src/cljs"]
                            :figwheel false
                            :compiler
                            {:optimizations :advanced
                             :pretty-print false}}}}}})
