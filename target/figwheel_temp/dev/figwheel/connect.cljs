(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3450/figwheel-ws"})

