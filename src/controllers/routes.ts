/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from 'npm:@tsoa/runtime';
import { ExpressTemplateService, fetchMiddlewares } from 'npm:@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GeneralController } from './general.controller.ts';
import type {
    Request as ExRequest,
    RequestHandler,
    Response as ExResponse,
    Router,
} from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {};
const templateService = new ExpressTemplateService(models, {
    'noImplicitAdditionalProperties': 'throw-on-extras',
    'bodyCoercion': true,
});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################

    app.get(
        '/api/health',
        ...(fetchMiddlewares<RequestHandler>(GeneralController)),
        ...(fetchMiddlewares<RequestHandler>(
            GeneralController.prototype.getHealthStatus,
        )),
        async function GeneralController_getHealthStatus(
            request: ExRequest,
            response: ExResponse,
            next: any,
        ) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {};

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({
                    args,
                    request,
                    response,
                });

                const controller = new GeneralController();

                await templateService.apiHandler({
                    methodName: 'getHealthStatus',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            } catch (err) {
                return next(err);
            }
        },
    );
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
