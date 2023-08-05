import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel.js";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = async (req, res) => {
  let newContact = new Contact(req.body);
  //TODO:Add try catch , drop x out mern video
  await newContact.save();
  res.json(newContact);
};

export const getContacts = async (req, res) => {
  let contact = await Contact.find();
  res.json(contact);
};

export const getContactWithID = async (req, res) => {
  const id = req.params.Id;
  let contactByID = await Contact.findById(id);
  res.json(contactByID);
};

export const updateContact = async (req, res) => {
  const id = req.params.Id;
  let updateContact = await Contact.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.json(updateContact);
};

export const deleteContact = async (req, res) => {
  const id = req.params.Id;
  let deleteContact = await Contact.findByIdAndDelete(id);
  res.json(deleteContact);
};
