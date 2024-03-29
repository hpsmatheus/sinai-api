/* eslint-disable @typescript-eslint/ban-types */
import { HttpStatus, Type } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import SinaiApiExceptionTyping from '../typings/sinai-api-exception.typing.entity';

function ok(
  type?: Type<unknown> | Function | [Function] | string,
): ApiResponseOptions {
  return {
    status: HttpStatus.OK,
    description: 'success',
    type,
  };
}

function created(
  type?: Type<unknown> | Function | [Function] | string,
): ApiResponseOptions {
  return {
    status: HttpStatus.CREATED,
    description: 'success',
    type,
  };
}

const inputValidationError: ApiResponseOptions = {
  status: HttpStatus.BAD_REQUEST,
  description: 'input validation error',
  type: SinaiApiExceptionTyping,
};

const internalError: ApiResponseOptions = {
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  description: 'internal server error',
  type: SinaiApiExceptionTyping,
};

export const SwaggerResponse = {
  Ok: ok,
  Created: created,
  InputValidationError: inputValidationError,
  InternalError: internalError,
};
