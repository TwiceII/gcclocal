(ns gcclocal.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [gcclocal.core-test]))

(enable-console-print!)

(doo-tests 'gcclocal.core-test)
