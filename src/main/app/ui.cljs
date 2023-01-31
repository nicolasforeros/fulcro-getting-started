(ns app.ui
  (:require
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
    [com.fulcrologic.fulcro.dom :as dom]
    [app.mutations :as api]))

(defsc Person [this {:person/keys [id name age] :as props} {:keys [onDelete]}]
  {:query [:person/id :person/name :person/age]
   :ident (fn [] [:person/id (:person/id props)])}
  (dom/li
    (dom/h5 (str name " (age: " age ")") (dom/button {:onClick #(onDelete id)} "X"))))

;; The keyfn generates a React key for each element based on props. See React documentation on keys.
(def ui-person (comp/computed-factory Person {:keyfn :person/name}))

(defsc PersonList [this {:list/keys [id label people] :as props}]
  {:query [:list/id :list/label {:list/people (comp/get-query Person)}]
   :ident (fn [] [:list/id (:list/id props)])}
  (let [delete-person (fn [person-id]
                        (comp/transact! this [(api/delete-person {:list/id id :person/id person-id})]))]
    (dom/div
      (dom/ul
        (map #(ui-person % {:onDelete delete-person}) people)))))

(def ui-person-list (comp/factory PersonList))

; Root's initial state becomes the entire app's initial state!
(defsc Root [this {:keys [friends enemies]}]
  {:query [{:friends (comp/get-query PersonList)}
           {:enemies (comp/get-query PersonList)}]
   :initial-state {}}
  (dom/div
    (dom/h3 "Friends")
    (when friends
      (ui-person-list friends))
    (dom/h3 "Enemies")
    (when enemies
      (ui-person-list enemies))))