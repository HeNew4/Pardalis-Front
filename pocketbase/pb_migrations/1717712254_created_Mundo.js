/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5l8bfjarbi89d67",
    "created": "2024-06-06 22:17:34.202Z",
    "updated": "2024-06-06 22:17:34.202Z",
    "name": "Mundo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "chitmlp4",
        "name": "Titulo",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vgsmbcki",
        "name": "Descripcion",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kl3i2dij",
        "name": "imagen",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_OwPJPTz` ON `Mundo` (`Titulo`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("5l8bfjarbi89d67");

  return dao.deleteCollection(collection);
})
