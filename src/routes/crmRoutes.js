import {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController.js";

const routes = (app) => {
  app
    .route("/contact")
    .get(getContacts)

    .post(addNewContact);

  app
    .route("/contact/:Id")
    .get(getContactWithID)
    .put(updateContact)

    .delete(deleteContact);
};

export default routes;
