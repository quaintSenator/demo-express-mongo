const express = require("express");
const router = express.Router();

const {
  getRnas,
  getRnasWithSkip,
  getRnasBygc,
  getRnasByid,
  downloadFile
} = require("../controllers/rnas.js");

router.get("/rna", getRnas);
router.get("/", getRnas);
router.get("/PageNo/:PageNo/PageSize/:PageSize", getRnasWithSkip);
router.get("/bygc/:Chr/:Begin/:End/:PageSize/:PageNo", getRnasBygc);
router.get("/by/byid/:isoid", getRnasByid);
router.get("/download/:Fileid", downloadFile);

//router.post("/", createProduct);

//router.put("/:productID", updateProduct);

//router.delete("/:productID", deleteProduct);

module.exports = router;

