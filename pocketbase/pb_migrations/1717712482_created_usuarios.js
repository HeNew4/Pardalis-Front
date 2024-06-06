/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cnys2nmnul8ihyl",
    "created": "2024-06-06 22:21:22.165Z",
    "updated": "2024-06-06 22:21:22.165Z",
    "name": "usuarios",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "os8rhgfq",
        "name": "apodo",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 4,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "45zmh0p4",
        "name": "correo",
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
        "id": "bixgren4",
        "name": "contrasenna",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 4,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bexeuewx",
        "name": "nombre",
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
    "indexes": [
      "CREATE UNIQUE INDEX `idx_wTGKCsW` ON `usuarios` (\n  `apodo`,\n  `correo`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cnys2nmnul8ihyl");

  return dao.deleteCollection(collection);
})
