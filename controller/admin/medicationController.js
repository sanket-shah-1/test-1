/**
 * medicationController.js
 * @description : exports action methods for medication.
 */

const Medication = require('../../model/medication');
const medicationSchemaKey = require('../../utils/validation/medicationValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const ObjectId = require('mongodb').ObjectId;
const utils = require('../../utils/common');
   
/**
 * @description : create document of Medication in mongodb collection.
 * @param {Object} req : request including body for creating document.
 * @param {Object} res : response of created document
 * @return {Object} : created Medication. {status, message, data}
 */ 
const addMedication = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      medicationSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    dataToCreate.addedBy = req.user.id;
    dataToCreate = new Medication(dataToCreate);
    let createdMedication = await dbService.create(Medication,dataToCreate);
    return res.success({ data : createdMedication });
  } catch (error) {
    return res.internalServerError({ message:error.message }); 
  }
};
    
/**
 * @description : create multiple documents of Medication in mongodb collection.
 * @param {Object} req : request including body for creating documents.
 * @param {Object} res : response of created documents.
 * @return {Object} : created Medications. {status, message, data}
 */
const bulkInsertMedication = async (req,res)=>{
  try {
    if (req.body && (!Array.isArray(req.body.data) || req.body.data.length < 1)) {
      return res.badRequest();
    }
    let dataToCreate = [ ...req.body.data ];
    for (let i = 0;i < dataToCreate.length;i++){
      dataToCreate[i] = {
        ...dataToCreate[i],
        addedBy: req.user.id
      };
    }
    let createdMedications = await dbService.create(Medication,dataToCreate);
    createdMedications = { count: createdMedications ? createdMedications.length : 0 };
    return res.success({ data:{ count:createdMedications.count || 0 } });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};
    
/**
 * @description : find all documents of Medication from collection based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, pagination, populate}, isCountOnly}
 * @param {Object} res : response contains data found from collection.
 * @return {Object} : found Medication(s). {status, message, data}
 */
const findAllMedication = async (req,res) => {
  try {
    let options = {};
    let query = {};
    let validateRequest = validation.validateFilterWithJoi(
      req.body,
      medicationSchemaKey.findFilterKeys,
      Medication.schema.obj
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (typeof req.body.query === 'object' && req.body.query !== null) {
      query = { ...req.body.query };
    }
    if (req.body.isCountOnly){
      let totalRecords = await dbService.count(Medication, query);
      return res.success({ data: { totalRecords } });
    }
    if (req.body && typeof req.body.options === 'object' && req.body.options !== null) {
      options = { ...req.body.options };
    }
    let foundMedications = await dbService.paginate( Medication,query,options);
    if (!foundMedications || !foundMedications.data || !foundMedications.data.length){
      return res.recordNotFound(); 
    }
    return res.success({ data :foundMedications });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};
        
/**
 * @description : find document of Medication from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains document retrieved from table.
 * @return {Object} : found Medication. {status, message, data}
 */
const getMedication = async (req,res) => {
  try {
    let query = {};
    if (!ObjectId.isValid(req.params.id)) {
      return res.validationError({ message : 'invalid objectId.' });
    }
    query._id = req.params.id;
    let options = {};
    let foundMedication = await dbService.findOne(Medication,query, options);
    if (!foundMedication){
      return res.recordNotFound();
    }
    return res.success({ data :foundMedication });
  }
  catch (error){
    return res.internalServerError({ message:error.message });
  }
};
    
/**
 * @description : returns total number of documents of Medication.
 * @param {Object} req : request including where object to apply filters in req body 
 * @param {Object} res : response that returns total number of documents.
 * @return {Object} : number of documents. {status, message, data}
 */
const getMedicationCount = async (req,res) => {
  try {
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      req.body,
      medicationSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (typeof req.body.where === 'object' && req.body.where !== null) {
      where = { ...req.body.where };
    }
    let countedMedication = await dbService.count(Medication,where);
    return res.success({ data : { count: countedMedication } });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};
    
/**
 * @description : update document of Medication with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Medication.
 * @return {Object} : updated Medication. {status, message, data}
 */
const updateMedication = async (req,res) => {
  try {
    let dataToUpdate = {
      ...req.body,
      updatedBy:req.user.id,
    };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      medicationSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { _id:req.params.id };
    let updatedMedication = await dbService.updateOne(Medication,query,dataToUpdate);
    if (!updatedMedication){
      return res.recordNotFound();
    }
    return res.success({ data :updatedMedication });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : update multiple records of Medication with data by filter.
 * @param {Object} req : request including filter and data in request body.
 * @param {Object} res : response of updated Medications.
 * @return {Object} : updated Medications. {status, message, data}
 */
const bulkUpdateMedication = async (req,res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    delete dataToUpdate['addedBy'];
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = { 
        ...req.body.data,
        updatedBy : req.user.id
      };
    }
    let updatedMedication = await dbService.updateMany(Medication,filter,dataToUpdate);
    if (!updatedMedication){
      return res.recordNotFound();
    }
    return res.success({ data :{ count : updatedMedication } });
  } catch (error){
    return res.internalServerError({ message:error.message }); 
  }
};
    
/**
 * @description : partially update document of Medication with data by id;
 * @param {obj} req : request including id in request params and data in request body.
 * @param {obj} res : response of updated Medication.
 * @return {obj} : updated Medication. {status, message, data}
 */
const partialUpdateMedication = async (req,res) => {
  try {
    if (!req.params.id){
      res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }
    delete req.body['addedBy'];
    let dataToUpdate = {
      ...req.body,
      updatedBy:req.user.id,
    };
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      medicationSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { _id:req.params.id };
    let updatedMedication = await dbService.updateOne(Medication, query, dataToUpdate);
    if (!updatedMedication) {
      return res.recordNotFound();
    }
    return res.success({ data:updatedMedication });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};
/**
 * @description : deactivate document of Medication from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated document of Medication.
 * @return {Object} : deactivated Medication. {status, message, data}
 */
const softDeleteMedication = async (req,res) => {
  try {
    if (!req.params.id){
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }
    let query = { _id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id,
    };
    let updatedMedication = await dbService.updateOne(Medication, query, updateBody);
    if (!updatedMedication){
      return res.recordNotFound();
    }
    return res.success({ data:updatedMedication });
  } catch (error){
    return res.internalServerError({ message:error.message }); 
  }
};

/**
 * @description : delete document of Medication from table.
 * @param {Object} req : request including id as req param.
 * @param {Object} res : response contains deleted document.
 * @return {Object} : deleted Medication. {status, message, data}
 */
const deleteMedication = async (req,res) => {
  try { 
    if (!req.params.id){
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }
    const query = { _id:req.params.id };
    const deletedMedication = await dbService.deleteOne(Medication, query);
    if (!deletedMedication){
      return res.recordNotFound();
    }
    return res.success({ data :deletedMedication });
        
  }
  catch (error){
    return res.internalServerError({ message:error.message });
  }
};
    
/**
 * @description : delete documents of Medication in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of documents deleted.
 * @return {Object} : no of documents deleted. {status, message, data}
 */
const deleteManyMedication = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids || !Array.isArray(ids) || ids.length < 1) {
      return res.badRequest();
    }
    const query = { _id:{ $in:ids } };
    const deletedMedication = await dbService.deleteMany(Medication,query);
    if (!deletedMedication){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :deletedMedication } });
  } catch (error){
    return res.internalServerError({ message:error.message }); 
  }
};
/**
 * @description : deactivate multiple documents of Medication from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated documents of Medication.
 * @return {Object} : number of deactivated documents of Medication. {status, message, data}
 */
const softDeleteManyMedication = async (req,res) => {
  try {
    let ids = req.body.ids;
    if (!ids || !Array.isArray(ids) || ids.length < 1) {
      return res.badRequest();
    }
    const query = { _id:{ $in:ids } };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id,
    };
    let updatedMedication = await dbService.updateMany(Medication,query, updateBody);
    if (!updatedMedication) {
      return res.recordNotFound();
    }
    return res.success({ data:{ count :updatedMedication } });
        
  } catch (error){
    return res.internalServerError({ message:error.message }); 
  }
};

module.exports = {
  addMedication,
  bulkInsertMedication,
  findAllMedication,
  getMedication,
  getMedicationCount,
  updateMedication,
  bulkUpdateMedication,
  partialUpdateMedication,
  softDeleteMedication,
  deleteMedication,
  deleteManyMedication,
  softDeleteManyMedication    
};