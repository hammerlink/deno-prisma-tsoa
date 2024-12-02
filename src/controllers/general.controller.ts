import { Controller, Get, Route, Tags } from "npm:@tsoa/runtime";
import { prisma } from "../resources/prisma/client.ts";

@Route()
@Tags("General")
export class GeneralController extends Controller {
  @Get("health")
  public async getHealthStatus() {
    const sampleCount = await prisma().user.count();
    console.log("sample count:", sampleCount);
    return { status: "healthy" };
  }
}
