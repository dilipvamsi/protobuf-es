// Protocol Buffers - Google's data interchange format
// Copyright 2008 Google Inc.  All rights reserved.
// https://developers.google.com/protocol-buffers/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//     * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// Test schema for proto3 messages.  This test schema is used by:
//
// - benchmarks
// - fuzz tests
// - conformance tests
//

// @generated by protoc-gen-es v0.4.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file google/protobuf/test_messages_proto3.proto (package protobuf_test_messages.proto3, syntax proto3)
/* eslint-disable */

import type { Any, BinaryReadOptions, BoolValue, BytesValue, DoubleValue, Duration, FieldList, FieldMask, FloatValue, Int32Value, Int64Value, JsonReadOptions, JsonValue, ListValue, NullValue, PartialMessage, PlainMessage, StringValue, Struct, Timestamp, UInt32Value, UInt64Value, Value } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum protobuf_test_messages.proto3.ForeignEnum
 */
export declare enum ForeignEnum {
  /**
   * @generated from enum value: FOREIGN_FOO = 0;
   */
  FOREIGN_FOO = 0,

  /**
   * @generated from enum value: FOREIGN_BAR = 1;
   */
  FOREIGN_BAR = 1,

  /**
   * @generated from enum value: FOREIGN_BAZ = 2;
   */
  FOREIGN_BAZ = 2,
}

/**
 * This proto includes every type of field in both singular and repeated
 * forms.
 *
 * Also, crucially, all messages and enums in this file are eventually
 * submessages of this message.  So for example, a fuzz test of TestAllTypes
 * could trigger bugs that occur in any message type in this file.  We verify
 * this stays true in a unit test.
 *
 * @generated from message protobuf_test_messages.proto3.TestAllTypesProto3
 */
export declare class TestAllTypesProto3 extends Message<TestAllTypesProto3> {
  /**
   * Singular
   *
   * @generated from field: int32 optional_int32 = 1;
   */
  optionalInt32: number;

  /**
   * @generated from field: int64 optional_int64 = 2;
   */
  optionalInt64: bigint;

  /**
   * @generated from field: uint32 optional_uint32 = 3;
   */
  optionalUint32: number;

  /**
   * @generated from field: uint64 optional_uint64 = 4;
   */
  optionalUint64: bigint;

  /**
   * @generated from field: sint32 optional_sint32 = 5;
   */
  optionalSint32: number;

  /**
   * @generated from field: sint64 optional_sint64 = 6;
   */
  optionalSint64: bigint;

  /**
   * @generated from field: fixed32 optional_fixed32 = 7;
   */
  optionalFixed32: number;

  /**
   * @generated from field: fixed64 optional_fixed64 = 8;
   */
  optionalFixed64: bigint;

  /**
   * @generated from field: sfixed32 optional_sfixed32 = 9;
   */
  optionalSfixed32: number;

  /**
   * @generated from field: sfixed64 optional_sfixed64 = 10;
   */
  optionalSfixed64: bigint;

  /**
   * @generated from field: float optional_float = 11;
   */
  optionalFloat: number;

  /**
   * @generated from field: double optional_double = 12;
   */
  optionalDouble: number;

  /**
   * @generated from field: bool optional_bool = 13;
   */
  optionalBool: boolean;

  /**
   * @generated from field: string optional_string = 14;
   */
  optionalString: string;

  /**
   * @generated from field: bytes optional_bytes = 15;
   */
  optionalBytes: Uint8Array;

  /**
   * @generated from field: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage optional_nested_message = 18;
   */
  optionalNestedMessage?: TestAllTypesProto3_NestedMessage;

  /**
   * @generated from field: protobuf_test_messages.proto3.ForeignMessage optional_foreign_message = 19;
   */
  optionalForeignMessage?: ForeignMessage;

  /**
   * @generated from field: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum optional_nested_enum = 21;
   */
  optionalNestedEnum: TestAllTypesProto3_NestedEnum;

  /**
   * @generated from field: protobuf_test_messages.proto3.ForeignEnum optional_foreign_enum = 22;
   */
  optionalForeignEnum: ForeignEnum;

  /**
   * @generated from field: protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum optional_aliased_enum = 23;
   */
  optionalAliasedEnum: TestAllTypesProto3_AliasedEnum;

  /**
   * @generated from field: string optional_string_piece = 24;
   */
  optionalStringPiece: string;

  /**
   * @generated from field: string optional_cord = 25;
   */
  optionalCord: string;

  /**
   * @generated from field: protobuf_test_messages.proto3.TestAllTypesProto3 recursive_message = 27;
   */
  recursiveMessage?: TestAllTypesProto3;

  /**
   * Repeated
   *
   * @generated from field: repeated int32 repeated_int32 = 31;
   */
  repeatedInt32: number[];

  /**
   * @generated from field: repeated int64 repeated_int64 = 32;
   */
  repeatedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 repeated_uint32 = 33;
   */
  repeatedUint32: number[];

  /**
   * @generated from field: repeated uint64 repeated_uint64 = 34;
   */
  repeatedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 repeated_sint32 = 35;
   */
  repeatedSint32: number[];

  /**
   * @generated from field: repeated sint64 repeated_sint64 = 36;
   */
  repeatedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 repeated_fixed32 = 37;
   */
  repeatedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 repeated_fixed64 = 38;
   */
  repeatedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 repeated_sfixed32 = 39;
   */
  repeatedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 repeated_sfixed64 = 40;
   */
  repeatedSfixed64: bigint[];

  /**
   * @generated from field: repeated float repeated_float = 41;
   */
  repeatedFloat: number[];

  /**
   * @generated from field: repeated double repeated_double = 42;
   */
  repeatedDouble: number[];

  /**
   * @generated from field: repeated bool repeated_bool = 43;
   */
  repeatedBool: boolean[];

  /**
   * @generated from field: repeated string repeated_string = 44;
   */
  repeatedString: string[];

  /**
   * @generated from field: repeated bytes repeated_bytes = 45;
   */
  repeatedBytes: Uint8Array[];

  /**
   * @generated from field: repeated protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage repeated_nested_message = 48;
   */
  repeatedNestedMessage: TestAllTypesProto3_NestedMessage[];

  /**
   * @generated from field: repeated protobuf_test_messages.proto3.ForeignMessage repeated_foreign_message = 49;
   */
  repeatedForeignMessage: ForeignMessage[];

  /**
   * @generated from field: repeated protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum repeated_nested_enum = 51;
   */
  repeatedNestedEnum: TestAllTypesProto3_NestedEnum[];

  /**
   * @generated from field: repeated protobuf_test_messages.proto3.ForeignEnum repeated_foreign_enum = 52;
   */
  repeatedForeignEnum: ForeignEnum[];

  /**
   * @generated from field: repeated string repeated_string_piece = 54;
   */
  repeatedStringPiece: string[];

  /**
   * @generated from field: repeated string repeated_cord = 55;
   */
  repeatedCord: string[];

  /**
   * Packed
   *
   * @generated from field: repeated int32 packed_int32 = 75 [packed = true];
   */
  packedInt32: number[];

  /**
   * @generated from field: repeated int64 packed_int64 = 76 [packed = true];
   */
  packedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 packed_uint32 = 77 [packed = true];
   */
  packedUint32: number[];

  /**
   * @generated from field: repeated uint64 packed_uint64 = 78 [packed = true];
   */
  packedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 packed_sint32 = 79 [packed = true];
   */
  packedSint32: number[];

  /**
   * @generated from field: repeated sint64 packed_sint64 = 80 [packed = true];
   */
  packedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 packed_fixed32 = 81 [packed = true];
   */
  packedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 packed_fixed64 = 82 [packed = true];
   */
  packedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 packed_sfixed32 = 83 [packed = true];
   */
  packedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 packed_sfixed64 = 84 [packed = true];
   */
  packedSfixed64: bigint[];

  /**
   * @generated from field: repeated float packed_float = 85 [packed = true];
   */
  packedFloat: number[];

  /**
   * @generated from field: repeated double packed_double = 86 [packed = true];
   */
  packedDouble: number[];

  /**
   * @generated from field: repeated bool packed_bool = 87 [packed = true];
   */
  packedBool: boolean[];

  /**
   * @generated from field: repeated protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum packed_nested_enum = 88 [packed = true];
   */
  packedNestedEnum: TestAllTypesProto3_NestedEnum[];

  /**
   * Unpacked
   *
   * @generated from field: repeated int32 unpacked_int32 = 89 [packed = false];
   */
  unpackedInt32: number[];

  /**
   * @generated from field: repeated int64 unpacked_int64 = 90 [packed = false];
   */
  unpackedInt64: bigint[];

  /**
   * @generated from field: repeated uint32 unpacked_uint32 = 91 [packed = false];
   */
  unpackedUint32: number[];

  /**
   * @generated from field: repeated uint64 unpacked_uint64 = 92 [packed = false];
   */
  unpackedUint64: bigint[];

  /**
   * @generated from field: repeated sint32 unpacked_sint32 = 93 [packed = false];
   */
  unpackedSint32: number[];

  /**
   * @generated from field: repeated sint64 unpacked_sint64 = 94 [packed = false];
   */
  unpackedSint64: bigint[];

  /**
   * @generated from field: repeated fixed32 unpacked_fixed32 = 95 [packed = false];
   */
  unpackedFixed32: number[];

  /**
   * @generated from field: repeated fixed64 unpacked_fixed64 = 96 [packed = false];
   */
  unpackedFixed64: bigint[];

  /**
   * @generated from field: repeated sfixed32 unpacked_sfixed32 = 97 [packed = false];
   */
  unpackedSfixed32: number[];

  /**
   * @generated from field: repeated sfixed64 unpacked_sfixed64 = 98 [packed = false];
   */
  unpackedSfixed64: bigint[];

  /**
   * @generated from field: repeated float unpacked_float = 99 [packed = false];
   */
  unpackedFloat: number[];

  /**
   * @generated from field: repeated double unpacked_double = 100 [packed = false];
   */
  unpackedDouble: number[];

  /**
   * @generated from field: repeated bool unpacked_bool = 101 [packed = false];
   */
  unpackedBool: boolean[];

  /**
   * @generated from field: repeated protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum unpacked_nested_enum = 102 [packed = false];
   */
  unpackedNestedEnum: TestAllTypesProto3_NestedEnum[];

  /**
   * Map
   *
   * @generated from field: map<int32, int32> map_int32_int32 = 56;
   */
  mapInt32Int32: { [key: number]: number };

  /**
   * @generated from field: map<int64, int64> map_int64_int64 = 57;
   */
  mapInt64Int64: { [key: string]: bigint };

  /**
   * @generated from field: map<uint32, uint32> map_uint32_uint32 = 58;
   */
  mapUint32Uint32: { [key: number]: number };

  /**
   * @generated from field: map<uint64, uint64> map_uint64_uint64 = 59;
   */
  mapUint64Uint64: { [key: string]: bigint };

  /**
   * @generated from field: map<sint32, sint32> map_sint32_sint32 = 60;
   */
  mapSint32Sint32: { [key: number]: number };

  /**
   * @generated from field: map<sint64, sint64> map_sint64_sint64 = 61;
   */
  mapSint64Sint64: { [key: string]: bigint };

  /**
   * @generated from field: map<fixed32, fixed32> map_fixed32_fixed32 = 62;
   */
  mapFixed32Fixed32: { [key: number]: number };

  /**
   * @generated from field: map<fixed64, fixed64> map_fixed64_fixed64 = 63;
   */
  mapFixed64Fixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<sfixed32, sfixed32> map_sfixed32_sfixed32 = 64;
   */
  mapSfixed32Sfixed32: { [key: number]: number };

  /**
   * @generated from field: map<sfixed64, sfixed64> map_sfixed64_sfixed64 = 65;
   */
  mapSfixed64Sfixed64: { [key: string]: bigint };

  /**
   * @generated from field: map<int32, float> map_int32_float = 66;
   */
  mapInt32Float: { [key: number]: number };

  /**
   * @generated from field: map<int32, double> map_int32_double = 67;
   */
  mapInt32Double: { [key: number]: number };

  /**
   * @generated from field: map<bool, bool> map_bool_bool = 68;
   */
  mapBoolBool: { [key: string]: boolean };

  /**
   * @generated from field: map<string, string> map_string_string = 69;
   */
  mapStringString: { [key: string]: string };

  /**
   * @generated from field: map<string, bytes> map_string_bytes = 70;
   */
  mapStringBytes: { [key: string]: Uint8Array };

  /**
   * @generated from field: map<string, protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage> map_string_nested_message = 71;
   */
  mapStringNestedMessage: { [key: string]: TestAllTypesProto3_NestedMessage };

  /**
   * @generated from field: map<string, protobuf_test_messages.proto3.ForeignMessage> map_string_foreign_message = 72;
   */
  mapStringForeignMessage: { [key: string]: ForeignMessage };

  /**
   * @generated from field: map<string, protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum> map_string_nested_enum = 73;
   */
  mapStringNestedEnum: { [key: string]: TestAllTypesProto3_NestedEnum };

  /**
   * @generated from field: map<string, protobuf_test_messages.proto3.ForeignEnum> map_string_foreign_enum = 74;
   */
  mapStringForeignEnum: { [key: string]: ForeignEnum };

  /**
   * @generated from oneof protobuf_test_messages.proto3.TestAllTypesProto3.oneof_field
   */
  oneofField: {
    /**
     * @generated from field: uint32 oneof_uint32 = 111;
     */
    value: number;
    case: "oneofUint32";
  } | {
    /**
     * @generated from field: protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage oneof_nested_message = 112;
     */
    value: TestAllTypesProto3_NestedMessage;
    case: "oneofNestedMessage";
  } | {
    /**
     * @generated from field: string oneof_string = 113;
     */
    value: string;
    case: "oneofString";
  } | {
    /**
     * @generated from field: bytes oneof_bytes = 114;
     */
    value: Uint8Array;
    case: "oneofBytes";
  } | {
    /**
     * @generated from field: bool oneof_bool = 115;
     */
    value: boolean;
    case: "oneofBool";
  } | {
    /**
     * @generated from field: uint64 oneof_uint64 = 116;
     */
    value: bigint;
    case: "oneofUint64";
  } | {
    /**
     * @generated from field: float oneof_float = 117;
     */
    value: number;
    case: "oneofFloat";
  } | {
    /**
     * @generated from field: double oneof_double = 118;
     */
    value: number;
    case: "oneofDouble";
  } | {
    /**
     * @generated from field: protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum oneof_enum = 119;
     */
    value: TestAllTypesProto3_NestedEnum;
    case: "oneofEnum";
  } | {
    /**
     * @generated from field: google.protobuf.NullValue oneof_null_value = 120;
     */
    value: NullValue;
    case: "oneofNullValue";
  } | { case: undefined; value?: undefined };

  /**
   * Well-known types
   *
   * @generated from field: google.protobuf.BoolValue optional_bool_wrapper = 201;
   */
  optionalBoolWrapper?: boolean;

  /**
   * @generated from field: google.protobuf.Int32Value optional_int32_wrapper = 202;
   */
  optionalInt32Wrapper?: number;

  /**
   * @generated from field: google.protobuf.Int64Value optional_int64_wrapper = 203;
   */
  optionalInt64Wrapper?: bigint;

  /**
   * @generated from field: google.protobuf.UInt32Value optional_uint32_wrapper = 204;
   */
  optionalUint32Wrapper?: number;

  /**
   * @generated from field: google.protobuf.UInt64Value optional_uint64_wrapper = 205;
   */
  optionalUint64Wrapper?: bigint;

  /**
   * @generated from field: google.protobuf.FloatValue optional_float_wrapper = 206;
   */
  optionalFloatWrapper?: number;

  /**
   * @generated from field: google.protobuf.DoubleValue optional_double_wrapper = 207;
   */
  optionalDoubleWrapper?: number;

  /**
   * @generated from field: google.protobuf.StringValue optional_string_wrapper = 208;
   */
  optionalStringWrapper?: string;

  /**
   * @generated from field: google.protobuf.BytesValue optional_bytes_wrapper = 209;
   */
  optionalBytesWrapper?: Uint8Array;

  /**
   * @generated from field: repeated google.protobuf.BoolValue repeated_bool_wrapper = 211;
   */
  repeatedBoolWrapper: BoolValue[];

  /**
   * @generated from field: repeated google.protobuf.Int32Value repeated_int32_wrapper = 212;
   */
  repeatedInt32Wrapper: Int32Value[];

  /**
   * @generated from field: repeated google.protobuf.Int64Value repeated_int64_wrapper = 213;
   */
  repeatedInt64Wrapper: Int64Value[];

  /**
   * @generated from field: repeated google.protobuf.UInt32Value repeated_uint32_wrapper = 214;
   */
  repeatedUint32Wrapper: UInt32Value[];

  /**
   * @generated from field: repeated google.protobuf.UInt64Value repeated_uint64_wrapper = 215;
   */
  repeatedUint64Wrapper: UInt64Value[];

  /**
   * @generated from field: repeated google.protobuf.FloatValue repeated_float_wrapper = 216;
   */
  repeatedFloatWrapper: FloatValue[];

  /**
   * @generated from field: repeated google.protobuf.DoubleValue repeated_double_wrapper = 217;
   */
  repeatedDoubleWrapper: DoubleValue[];

  /**
   * @generated from field: repeated google.protobuf.StringValue repeated_string_wrapper = 218;
   */
  repeatedStringWrapper: StringValue[];

  /**
   * @generated from field: repeated google.protobuf.BytesValue repeated_bytes_wrapper = 219;
   */
  repeatedBytesWrapper: BytesValue[];

  /**
   * @generated from field: google.protobuf.Duration optional_duration = 301;
   */
  optionalDuration?: Duration;

  /**
   * @generated from field: google.protobuf.Timestamp optional_timestamp = 302;
   */
  optionalTimestamp?: Timestamp;

  /**
   * @generated from field: google.protobuf.FieldMask optional_field_mask = 303;
   */
  optionalFieldMask?: FieldMask;

  /**
   * @generated from field: google.protobuf.Struct optional_struct = 304;
   */
  optionalStruct?: Struct;

  /**
   * @generated from field: google.protobuf.Any optional_any = 305;
   */
  optionalAny?: Any;

  /**
   * @generated from field: google.protobuf.Value optional_value = 306;
   */
  optionalValue?: Value;

  /**
   * @generated from field: google.protobuf.NullValue optional_null_value = 307;
   */
  optionalNullValue: NullValue;

  /**
   * @generated from field: repeated google.protobuf.Duration repeated_duration = 311;
   */
  repeatedDuration: Duration[];

  /**
   * @generated from field: repeated google.protobuf.Timestamp repeated_timestamp = 312;
   */
  repeatedTimestamp: Timestamp[];

  /**
   * @generated from field: repeated google.protobuf.FieldMask repeated_fieldmask = 313;
   */
  repeatedFieldmask: FieldMask[];

  /**
   * @generated from field: repeated google.protobuf.Struct repeated_struct = 324;
   */
  repeatedStruct: Struct[];

  /**
   * @generated from field: repeated google.protobuf.Any repeated_any = 315;
   */
  repeatedAny: Any[];

  /**
   * @generated from field: repeated google.protobuf.Value repeated_value = 316;
   */
  repeatedValue: Value[];

  /**
   * @generated from field: repeated google.protobuf.ListValue repeated_list_value = 317;
   */
  repeatedListValue: ListValue[];

  /**
   * Test field-name-to-JSON-name convention.
   * (protobuf says names can be any valid C/C++ identifier.)
   *
   * @generated from field: int32 fieldname1 = 401;
   */
  fieldname1: number;

  /**
   * @generated from field: int32 field_name2 = 402;
   */
  fieldName2: number;

  /**
   * @generated from field: int32 _field_name3 = 403;
   */
  FieldName3: number;

  /**
   * @generated from field: int32 field__name4_ = 404;
   */
  fieldName4: number;

  /**
   * @generated from field: int32 field0name5 = 405;
   */
  field0name5: number;

  /**
   * @generated from field: int32 field_0_name6 = 406;
   */
  field0Name6: number;

  /**
   * @generated from field: int32 fieldName7 = 407;
   */
  fieldName7: number;

  /**
   * @generated from field: int32 FieldName8 = 408;
   */
  FieldName8: number;

  /**
   * @generated from field: int32 field_Name9 = 409;
   */
  fieldName9: number;

  /**
   * @generated from field: int32 Field_Name10 = 410;
   */
  FieldName10: number;

  /**
   * @generated from field: int32 FIELD_NAME11 = 411;
   */
  FIELDNAME11: number;

  /**
   * @generated from field: int32 FIELD_name12 = 412;
   */
  FIELDName12: number;

  /**
   * @generated from field: int32 __field_name13 = 413;
   */
  FieldName13: number;

  /**
   * @generated from field: int32 __Field_name14 = 414;
   */
  FieldName14: number;

  /**
   * @generated from field: int32 field__name15 = 415;
   */
  fieldName15: number;

  /**
   * @generated from field: int32 field__Name16 = 416;
   */
  fieldName16: number;

  /**
   * @generated from field: int32 field_name17__ = 417;
   */
  fieldName17: number;

  /**
   * @generated from field: int32 Field_name18__ = 418;
   */
  FieldName18: number;

  constructor(data?: PartialMessage<TestAllTypesProto3>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf_test_messages.proto3.TestAllTypesProto3";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypesProto3;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypesProto3;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypesProto3;

  static equals(a: TestAllTypesProto3 | PlainMessage<TestAllTypesProto3> | undefined, b: TestAllTypesProto3 | PlainMessage<TestAllTypesProto3> | undefined): boolean;
}

/**
 * @generated from enum protobuf_test_messages.proto3.TestAllTypesProto3.NestedEnum
 */
export declare enum TestAllTypesProto3_NestedEnum {
  /**
   * @generated from enum value: FOO = 0;
   */
  FOO = 0,

  /**
   * @generated from enum value: BAR = 1;
   */
  BAR = 1,

  /**
   * @generated from enum value: BAZ = 2;
   */
  BAZ = 2,

  /**
   * Intentionally negative.
   *
   * @generated from enum value: NEG = -1;
   */
  NEG = -1,
}

/**
 * @generated from enum protobuf_test_messages.proto3.TestAllTypesProto3.AliasedEnum
 */
export declare enum TestAllTypesProto3_AliasedEnum {
  /**
   * @generated from enum value: ALIAS_FOO = 0;
   */
  ALIAS_FOO = 0,

  /**
   * @generated from enum value: ALIAS_BAR = 1;
   */
  ALIAS_BAR = 1,

  /**
   * @generated from enum value: ALIAS_BAZ = 2;
   */
  ALIAS_BAZ = 2,

  /**
   * @generated from enum value: MOO = 2;
   */
  MOO = 2,

  /**
   * @generated from enum value: moo = 2;
   */
  moo = 2,

  /**
   * @generated from enum value: bAz = 2;
   */
  bAz = 2,
}

/**
 * @generated from message protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage
 */
export declare class TestAllTypesProto3_NestedMessage extends Message<TestAllTypesProto3_NestedMessage> {
  /**
   * @generated from field: int32 a = 1;
   */
  a: number;

  /**
   * @generated from field: protobuf_test_messages.proto3.TestAllTypesProto3 corecursive = 2;
   */
  corecursive?: TestAllTypesProto3;

  constructor(data?: PartialMessage<TestAllTypesProto3_NestedMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf_test_messages.proto3.TestAllTypesProto3.NestedMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestAllTypesProto3_NestedMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestAllTypesProto3_NestedMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestAllTypesProto3_NestedMessage;

  static equals(a: TestAllTypesProto3_NestedMessage | PlainMessage<TestAllTypesProto3_NestedMessage> | undefined, b: TestAllTypesProto3_NestedMessage | PlainMessage<TestAllTypesProto3_NestedMessage> | undefined): boolean;
}

/**
 * @generated from message protobuf_test_messages.proto3.ForeignMessage
 */
export declare class ForeignMessage extends Message<ForeignMessage> {
  /**
   * @generated from field: int32 c = 1;
   */
  c: number;

  constructor(data?: PartialMessage<ForeignMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf_test_messages.proto3.ForeignMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ForeignMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ForeignMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ForeignMessage;

  static equals(a: ForeignMessage | PlainMessage<ForeignMessage> | undefined, b: ForeignMessage | PlainMessage<ForeignMessage> | undefined): boolean;
}

/**
 * @generated from message protobuf_test_messages.proto3.NullHypothesisProto3
 */
export declare class NullHypothesisProto3 extends Message<NullHypothesisProto3> {
  constructor(data?: PartialMessage<NullHypothesisProto3>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf_test_messages.proto3.NullHypothesisProto3";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NullHypothesisProto3;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NullHypothesisProto3;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NullHypothesisProto3;

  static equals(a: NullHypothesisProto3 | PlainMessage<NullHypothesisProto3> | undefined, b: NullHypothesisProto3 | PlainMessage<NullHypothesisProto3> | undefined): boolean;
}

/**
 * @generated from message protobuf_test_messages.proto3.EnumOnlyProto3
 */
export declare class EnumOnlyProto3 extends Message<EnumOnlyProto3> {
  constructor(data?: PartialMessage<EnumOnlyProto3>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "protobuf_test_messages.proto3.EnumOnlyProto3";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnumOnlyProto3;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnumOnlyProto3;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnumOnlyProto3;

  static equals(a: EnumOnlyProto3 | PlainMessage<EnumOnlyProto3> | undefined, b: EnumOnlyProto3 | PlainMessage<EnumOnlyProto3> | undefined): boolean;
}

/**
 * @generated from enum protobuf_test_messages.proto3.EnumOnlyProto3.Bool
 */
export declare enum EnumOnlyProto3_Bool {
  /**
   * @generated from enum value: kFalse = 0;
   */
  kFalse = 0,

  /**
   * @generated from enum value: kTrue = 1;
   */
  kTrue = 1,
}

