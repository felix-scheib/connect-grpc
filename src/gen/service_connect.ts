// @generated by protoc-gen-connect-es v1.5.0 with parameter "target=ts"
// @generated from file service.proto (package service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Request, Response } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service service.Service
 */
export const Service = {
  typeName: "service.Service",
  methods: {
    /**
     * @generated from rpc service.Service.Echo
     */
    echo: {
      name: "Echo",
      I: Request,
      O: Response,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc service.Service.ToLower
     */
    toLower: {
      name: "ToLower",
      I: Request,
      O: Response,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc service.Service.ToUpper
     */
    toUpper: {
      name: "ToUpper",
      I: Request,
      O: Response,
      kind: MethodKind.Unary,
    },
  }
} as const;

