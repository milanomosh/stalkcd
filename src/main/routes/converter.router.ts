import express = require("express");
import ConverterController from "../controllers/converter.controller";

const router = express.Router();

router.post("/jenkinstostalklcd", async (req, res) => {
    const controller = new ConverterController();
    const response = await controller.convertJenkinsToStalkCd(req.body);
    return res.send(response);
});

router.post("/stalkcdtojenkins", async (req, res) => {
    const controller = new ConverterController();
    const response = await controller.convertStalkCdToJenkins(req.body);
    return res.send(response);
});

router.post("/stalkcdtobpmn", async (req, res) => {
    const controller = new ConverterController();
    const response = await controller.convertStalkCdToBPMN(req.body);
    return res.send(response);
});

router.post("/bpmntostalkcd", async (req, res) => {
    const controller = new ConverterController();
    const response = await controller.convertBPMNToStalkCd(req.body);
    return res.send(response);
});

router.post("/bpmntojenkins", async (req, res) => {
    const controller = new ConverterController();
    const response = await controller.convertBPMNToJenkins(req.body);
    return res.send(response);
});

router.post("/jenkinstogithubactions", async (req, res) => {
    const controller = new ConverterController();
    const response = await controller.convertJenkinsToGitHubActions(req.body);
    return res.send(response);
});

router.get("/test", async (req, res) => {
    const controller = new ConverterController();
    const response = await controller.test();
    return res.send(response);
});

export default router;