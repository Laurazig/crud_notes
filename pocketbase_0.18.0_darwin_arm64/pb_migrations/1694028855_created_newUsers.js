/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wzsjlj4xjn8u3y5",
    "created": "2023-09-06 19:34:15.641Z",
    "updated": "2023-09-06 19:34:15.641Z",
    "name": "newUsers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vb2yl3nw",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wzsjlj4xjn8u3y5");

  return dao.deleteCollection(collection);
})
