
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model Stroke
 * 
 */
export type Stroke = $Result.DefaultSelection<Prisma.$StrokePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Boards
 * const boards = await prisma.board.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Boards
   * const boards = await prisma.board.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stroke`: Exposes CRUD operations for the **Stroke** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Strokes
    * const strokes = await prisma.stroke.findMany()
    * ```
    */
  get stroke(): Prisma.StrokeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Board: 'Board',
    Stroke: 'Stroke'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "board" | "stroke"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      Stroke: {
        payload: Prisma.$StrokePayload<ExtArgs>
        fields: Prisma.StrokeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StrokeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StrokeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          findFirst: {
            args: Prisma.StrokeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StrokeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          findMany: {
            args: Prisma.StrokeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>[]
          }
          create: {
            args: Prisma.StrokeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          createMany: {
            args: Prisma.StrokeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StrokeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>[]
          }
          delete: {
            args: Prisma.StrokeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          update: {
            args: Prisma.StrokeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          deleteMany: {
            args: Prisma.StrokeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StrokeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StrokeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>[]
          }
          upsert: {
            args: Prisma.StrokeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StrokePayload>
          }
          aggregate: {
            args: Prisma.StrokeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStroke>
          }
          groupBy: {
            args: Prisma.StrokeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StrokeGroupByOutputType>[]
          }
          count: {
            args: Prisma.StrokeCountArgs<ExtArgs>
            result: $Utils.Optional<StrokeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    board?: BoardOmit
    stroke?: StrokeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    strokes: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    strokes?: boolean | BoardCountOutputTypeCountStrokesArgs
  }

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountStrokesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrokeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type BoardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type BoardMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: BoardCountAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    strokes?: boolean | Board$strokesArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["board"]>

  export type BoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type BoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["board"]>
  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    strokes?: boolean | Board$strokesArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      strokes: Prisma.$StrokePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {BoardUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoardUpdateManyAndReturnArgs>(args: SelectSubset<T, BoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    strokes<T extends Board$strokesArgs<ExtArgs> = {}>(args?: Subset<T, Board$strokesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Board model
   */
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'String'>
    readonly name: FieldRef<"Board", 'String'>
    readonly createdAt: FieldRef<"Board", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board createManyAndReturn
   */
  export type BoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board updateManyAndReturn
   */
  export type BoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to update.
     */
    limit?: number
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
    /**
     * Limit how many Boards to delete.
     */
    limit?: number
  }

  /**
   * Board.strokes
   */
  export type Board$strokesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    where?: StrokeWhereInput
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    cursor?: StrokeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StrokeScalarFieldEnum | StrokeScalarFieldEnum[]
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model Stroke
   */

  export type AggregateStroke = {
    _count: StrokeCountAggregateOutputType | null
    _avg: StrokeAvgAggregateOutputType | null
    _sum: StrokeSumAggregateOutputType | null
    _min: StrokeMinAggregateOutputType | null
    _max: StrokeMaxAggregateOutputType | null
  }

  export type StrokeAvgAggregateOutputType = {
    x0: number | null
    y0: number | null
    x1: number | null
    y1: number | null
    width: number | null
  }

  export type StrokeSumAggregateOutputType = {
    x0: number | null
    y0: number | null
    x1: number | null
    y1: number | null
    width: number | null
  }

  export type StrokeMinAggregateOutputType = {
    id: string | null
    boardId: string | null
    x0: number | null
    y0: number | null
    x1: number | null
    y1: number | null
    color: string | null
    width: number | null
    createdAt: Date | null
  }

  export type StrokeMaxAggregateOutputType = {
    id: string | null
    boardId: string | null
    x0: number | null
    y0: number | null
    x1: number | null
    y1: number | null
    color: string | null
    width: number | null
    createdAt: Date | null
  }

  export type StrokeCountAggregateOutputType = {
    id: number
    boardId: number
    x0: number
    y0: number
    x1: number
    y1: number
    color: number
    width: number
    createdAt: number
    _all: number
  }


  export type StrokeAvgAggregateInputType = {
    x0?: true
    y0?: true
    x1?: true
    y1?: true
    width?: true
  }

  export type StrokeSumAggregateInputType = {
    x0?: true
    y0?: true
    x1?: true
    y1?: true
    width?: true
  }

  export type StrokeMinAggregateInputType = {
    id?: true
    boardId?: true
    x0?: true
    y0?: true
    x1?: true
    y1?: true
    color?: true
    width?: true
    createdAt?: true
  }

  export type StrokeMaxAggregateInputType = {
    id?: true
    boardId?: true
    x0?: true
    y0?: true
    x1?: true
    y1?: true
    color?: true
    width?: true
    createdAt?: true
  }

  export type StrokeCountAggregateInputType = {
    id?: true
    boardId?: true
    x0?: true
    y0?: true
    x1?: true
    y1?: true
    color?: true
    width?: true
    createdAt?: true
    _all?: true
  }

  export type StrokeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stroke to aggregate.
     */
    where?: StrokeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strokes to fetch.
     */
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StrokeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strokes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strokes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Strokes
    **/
    _count?: true | StrokeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StrokeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StrokeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StrokeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StrokeMaxAggregateInputType
  }

  export type GetStrokeAggregateType<T extends StrokeAggregateArgs> = {
        [P in keyof T & keyof AggregateStroke]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStroke[P]>
      : GetScalarType<T[P], AggregateStroke[P]>
  }




  export type StrokeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StrokeWhereInput
    orderBy?: StrokeOrderByWithAggregationInput | StrokeOrderByWithAggregationInput[]
    by: StrokeScalarFieldEnum[] | StrokeScalarFieldEnum
    having?: StrokeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StrokeCountAggregateInputType | true
    _avg?: StrokeAvgAggregateInputType
    _sum?: StrokeSumAggregateInputType
    _min?: StrokeMinAggregateInputType
    _max?: StrokeMaxAggregateInputType
  }

  export type StrokeGroupByOutputType = {
    id: string
    boardId: string
    x0: number
    y0: number
    x1: number
    y1: number
    color: string
    width: number
    createdAt: Date
    _count: StrokeCountAggregateOutputType | null
    _avg: StrokeAvgAggregateOutputType | null
    _sum: StrokeSumAggregateOutputType | null
    _min: StrokeMinAggregateOutputType | null
    _max: StrokeMaxAggregateOutputType | null
  }

  type GetStrokeGroupByPayload<T extends StrokeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StrokeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StrokeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StrokeGroupByOutputType[P]>
            : GetScalarType<T[P], StrokeGroupByOutputType[P]>
        }
      >
    >


  export type StrokeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    x0?: boolean
    y0?: boolean
    x1?: boolean
    y1?: boolean
    color?: boolean
    width?: boolean
    createdAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stroke"]>

  export type StrokeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    x0?: boolean
    y0?: boolean
    x1?: boolean
    y1?: boolean
    color?: boolean
    width?: boolean
    createdAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stroke"]>

  export type StrokeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boardId?: boolean
    x0?: boolean
    y0?: boolean
    x1?: boolean
    y1?: boolean
    color?: boolean
    width?: boolean
    createdAt?: boolean
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stroke"]>

  export type StrokeSelectScalar = {
    id?: boolean
    boardId?: boolean
    x0?: boolean
    y0?: boolean
    x1?: boolean
    y1?: boolean
    color?: boolean
    width?: boolean
    createdAt?: boolean
  }

  export type StrokeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "boardId" | "x0" | "y0" | "x1" | "y1" | "color" | "width" | "createdAt", ExtArgs["result"]["stroke"]>
  export type StrokeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }
  export type StrokeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }
  export type StrokeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | BoardDefaultArgs<ExtArgs>
  }

  export type $StrokePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stroke"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      boardId: string
      x0: number
      y0: number
      x1: number
      y1: number
      color: string
      width: number
      createdAt: Date
    }, ExtArgs["result"]["stroke"]>
    composites: {}
  }

  type StrokeGetPayload<S extends boolean | null | undefined | StrokeDefaultArgs> = $Result.GetResult<Prisma.$StrokePayload, S>

  type StrokeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StrokeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StrokeCountAggregateInputType | true
    }

  export interface StrokeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stroke'], meta: { name: 'Stroke' } }
    /**
     * Find zero or one Stroke that matches the filter.
     * @param {StrokeFindUniqueArgs} args - Arguments to find a Stroke
     * @example
     * // Get one Stroke
     * const stroke = await prisma.stroke.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StrokeFindUniqueArgs>(args: SelectSubset<T, StrokeFindUniqueArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stroke that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StrokeFindUniqueOrThrowArgs} args - Arguments to find a Stroke
     * @example
     * // Get one Stroke
     * const stroke = await prisma.stroke.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StrokeFindUniqueOrThrowArgs>(args: SelectSubset<T, StrokeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stroke that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeFindFirstArgs} args - Arguments to find a Stroke
     * @example
     * // Get one Stroke
     * const stroke = await prisma.stroke.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StrokeFindFirstArgs>(args?: SelectSubset<T, StrokeFindFirstArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stroke that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeFindFirstOrThrowArgs} args - Arguments to find a Stroke
     * @example
     * // Get one Stroke
     * const stroke = await prisma.stroke.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StrokeFindFirstOrThrowArgs>(args?: SelectSubset<T, StrokeFindFirstOrThrowArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Strokes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Strokes
     * const strokes = await prisma.stroke.findMany()
     * 
     * // Get first 10 Strokes
     * const strokes = await prisma.stroke.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const strokeWithIdOnly = await prisma.stroke.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StrokeFindManyArgs>(args?: SelectSubset<T, StrokeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stroke.
     * @param {StrokeCreateArgs} args - Arguments to create a Stroke.
     * @example
     * // Create one Stroke
     * const Stroke = await prisma.stroke.create({
     *   data: {
     *     // ... data to create a Stroke
     *   }
     * })
     * 
     */
    create<T extends StrokeCreateArgs>(args: SelectSubset<T, StrokeCreateArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Strokes.
     * @param {StrokeCreateManyArgs} args - Arguments to create many Strokes.
     * @example
     * // Create many Strokes
     * const stroke = await prisma.stroke.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StrokeCreateManyArgs>(args?: SelectSubset<T, StrokeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Strokes and returns the data saved in the database.
     * @param {StrokeCreateManyAndReturnArgs} args - Arguments to create many Strokes.
     * @example
     * // Create many Strokes
     * const stroke = await prisma.stroke.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Strokes and only return the `id`
     * const strokeWithIdOnly = await prisma.stroke.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StrokeCreateManyAndReturnArgs>(args?: SelectSubset<T, StrokeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stroke.
     * @param {StrokeDeleteArgs} args - Arguments to delete one Stroke.
     * @example
     * // Delete one Stroke
     * const Stroke = await prisma.stroke.delete({
     *   where: {
     *     // ... filter to delete one Stroke
     *   }
     * })
     * 
     */
    delete<T extends StrokeDeleteArgs>(args: SelectSubset<T, StrokeDeleteArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stroke.
     * @param {StrokeUpdateArgs} args - Arguments to update one Stroke.
     * @example
     * // Update one Stroke
     * const stroke = await prisma.stroke.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StrokeUpdateArgs>(args: SelectSubset<T, StrokeUpdateArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Strokes.
     * @param {StrokeDeleteManyArgs} args - Arguments to filter Strokes to delete.
     * @example
     * // Delete a few Strokes
     * const { count } = await prisma.stroke.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StrokeDeleteManyArgs>(args?: SelectSubset<T, StrokeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Strokes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Strokes
     * const stroke = await prisma.stroke.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StrokeUpdateManyArgs>(args: SelectSubset<T, StrokeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Strokes and returns the data updated in the database.
     * @param {StrokeUpdateManyAndReturnArgs} args - Arguments to update many Strokes.
     * @example
     * // Update many Strokes
     * const stroke = await prisma.stroke.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Strokes and only return the `id`
     * const strokeWithIdOnly = await prisma.stroke.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StrokeUpdateManyAndReturnArgs>(args: SelectSubset<T, StrokeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stroke.
     * @param {StrokeUpsertArgs} args - Arguments to update or create a Stroke.
     * @example
     * // Update or create a Stroke
     * const stroke = await prisma.stroke.upsert({
     *   create: {
     *     // ... data to create a Stroke
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stroke we want to update
     *   }
     * })
     */
    upsert<T extends StrokeUpsertArgs>(args: SelectSubset<T, StrokeUpsertArgs<ExtArgs>>): Prisma__StrokeClient<$Result.GetResult<Prisma.$StrokePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Strokes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeCountArgs} args - Arguments to filter Strokes to count.
     * @example
     * // Count the number of Strokes
     * const count = await prisma.stroke.count({
     *   where: {
     *     // ... the filter for the Strokes we want to count
     *   }
     * })
    **/
    count<T extends StrokeCountArgs>(
      args?: Subset<T, StrokeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StrokeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stroke.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StrokeAggregateArgs>(args: Subset<T, StrokeAggregateArgs>): Prisma.PrismaPromise<GetStrokeAggregateType<T>>

    /**
     * Group by Stroke.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StrokeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StrokeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StrokeGroupByArgs['orderBy'] }
        : { orderBy?: StrokeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StrokeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrokeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stroke model
   */
  readonly fields: StrokeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stroke.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StrokeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BoardDefaultArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stroke model
   */
  interface StrokeFieldRefs {
    readonly id: FieldRef<"Stroke", 'String'>
    readonly boardId: FieldRef<"Stroke", 'String'>
    readonly x0: FieldRef<"Stroke", 'Float'>
    readonly y0: FieldRef<"Stroke", 'Float'>
    readonly x1: FieldRef<"Stroke", 'Float'>
    readonly y1: FieldRef<"Stroke", 'Float'>
    readonly color: FieldRef<"Stroke", 'String'>
    readonly width: FieldRef<"Stroke", 'Float'>
    readonly createdAt: FieldRef<"Stroke", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stroke findUnique
   */
  export type StrokeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Stroke to fetch.
     */
    where: StrokeWhereUniqueInput
  }

  /**
   * Stroke findUniqueOrThrow
   */
  export type StrokeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Stroke to fetch.
     */
    where: StrokeWhereUniqueInput
  }

  /**
   * Stroke findFirst
   */
  export type StrokeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Stroke to fetch.
     */
    where?: StrokeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strokes to fetch.
     */
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Strokes.
     */
    cursor?: StrokeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strokes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strokes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strokes.
     */
    distinct?: StrokeScalarFieldEnum | StrokeScalarFieldEnum[]
  }

  /**
   * Stroke findFirstOrThrow
   */
  export type StrokeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Stroke to fetch.
     */
    where?: StrokeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strokes to fetch.
     */
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Strokes.
     */
    cursor?: StrokeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strokes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strokes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strokes.
     */
    distinct?: StrokeScalarFieldEnum | StrokeScalarFieldEnum[]
  }

  /**
   * Stroke findMany
   */
  export type StrokeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter, which Strokes to fetch.
     */
    where?: StrokeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Strokes to fetch.
     */
    orderBy?: StrokeOrderByWithRelationInput | StrokeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Strokes.
     */
    cursor?: StrokeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Strokes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Strokes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Strokes.
     */
    distinct?: StrokeScalarFieldEnum | StrokeScalarFieldEnum[]
  }

  /**
   * Stroke create
   */
  export type StrokeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * The data needed to create a Stroke.
     */
    data: XOR<StrokeCreateInput, StrokeUncheckedCreateInput>
  }

  /**
   * Stroke createMany
   */
  export type StrokeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Strokes.
     */
    data: StrokeCreateManyInput | StrokeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stroke createManyAndReturn
   */
  export type StrokeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * The data used to create many Strokes.
     */
    data: StrokeCreateManyInput | StrokeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stroke update
   */
  export type StrokeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * The data needed to update a Stroke.
     */
    data: XOR<StrokeUpdateInput, StrokeUncheckedUpdateInput>
    /**
     * Choose, which Stroke to update.
     */
    where: StrokeWhereUniqueInput
  }

  /**
   * Stroke updateMany
   */
  export type StrokeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Strokes.
     */
    data: XOR<StrokeUpdateManyMutationInput, StrokeUncheckedUpdateManyInput>
    /**
     * Filter which Strokes to update
     */
    where?: StrokeWhereInput
    /**
     * Limit how many Strokes to update.
     */
    limit?: number
  }

  /**
   * Stroke updateManyAndReturn
   */
  export type StrokeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * The data used to update Strokes.
     */
    data: XOR<StrokeUpdateManyMutationInput, StrokeUncheckedUpdateManyInput>
    /**
     * Filter which Strokes to update
     */
    where?: StrokeWhereInput
    /**
     * Limit how many Strokes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stroke upsert
   */
  export type StrokeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * The filter to search for the Stroke to update in case it exists.
     */
    where: StrokeWhereUniqueInput
    /**
     * In case the Stroke found by the `where` argument doesn't exist, create a new Stroke with this data.
     */
    create: XOR<StrokeCreateInput, StrokeUncheckedCreateInput>
    /**
     * In case the Stroke was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StrokeUpdateInput, StrokeUncheckedUpdateInput>
  }

  /**
   * Stroke delete
   */
  export type StrokeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
    /**
     * Filter which Stroke to delete.
     */
    where: StrokeWhereUniqueInput
  }

  /**
   * Stroke deleteMany
   */
  export type StrokeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Strokes to delete
     */
    where?: StrokeWhereInput
    /**
     * Limit how many Strokes to delete.
     */
    limit?: number
  }

  /**
   * Stroke without action
   */
  export type StrokeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stroke
     */
    select?: StrokeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stroke
     */
    omit?: StrokeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StrokeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BoardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const StrokeScalarFieldEnum: {
    id: 'id',
    boardId: 'boardId',
    x0: 'x0',
    y0: 'y0',
    x1: 'x1',
    y1: 'y1',
    color: 'color',
    width: 'width',
    createdAt: 'createdAt'
  };

  export type StrokeScalarFieldEnum = (typeof StrokeScalarFieldEnum)[keyof typeof StrokeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: StringFilter<"Board"> | string
    name?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    strokes?: StrokeListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    strokes?: StrokeOrderByRelationAggregateInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    name?: StringFilter<"Board"> | string
    createdAt?: DateTimeFilter<"Board"> | Date | string
    strokes?: StrokeListRelationFilter
  }, "id">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Board"> | string
    name?: StringWithAggregatesFilter<"Board"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
  }

  export type StrokeWhereInput = {
    AND?: StrokeWhereInput | StrokeWhereInput[]
    OR?: StrokeWhereInput[]
    NOT?: StrokeWhereInput | StrokeWhereInput[]
    id?: StringFilter<"Stroke"> | string
    boardId?: StringFilter<"Stroke"> | string
    x0?: FloatFilter<"Stroke"> | number
    y0?: FloatFilter<"Stroke"> | number
    x1?: FloatFilter<"Stroke"> | number
    y1?: FloatFilter<"Stroke"> | number
    color?: StringFilter<"Stroke"> | string
    width?: FloatFilter<"Stroke"> | number
    createdAt?: DateTimeFilter<"Stroke"> | Date | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
  }

  export type StrokeOrderByWithRelationInput = {
    id?: SortOrder
    boardId?: SortOrder
    x0?: SortOrder
    y0?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    color?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
    board?: BoardOrderByWithRelationInput
  }

  export type StrokeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StrokeWhereInput | StrokeWhereInput[]
    OR?: StrokeWhereInput[]
    NOT?: StrokeWhereInput | StrokeWhereInput[]
    boardId?: StringFilter<"Stroke"> | string
    x0?: FloatFilter<"Stroke"> | number
    y0?: FloatFilter<"Stroke"> | number
    x1?: FloatFilter<"Stroke"> | number
    y1?: FloatFilter<"Stroke"> | number
    color?: StringFilter<"Stroke"> | string
    width?: FloatFilter<"Stroke"> | number
    createdAt?: DateTimeFilter<"Stroke"> | Date | string
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>
  }, "id">

  export type StrokeOrderByWithAggregationInput = {
    id?: SortOrder
    boardId?: SortOrder
    x0?: SortOrder
    y0?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    color?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
    _count?: StrokeCountOrderByAggregateInput
    _avg?: StrokeAvgOrderByAggregateInput
    _max?: StrokeMaxOrderByAggregateInput
    _min?: StrokeMinOrderByAggregateInput
    _sum?: StrokeSumOrderByAggregateInput
  }

  export type StrokeScalarWhereWithAggregatesInput = {
    AND?: StrokeScalarWhereWithAggregatesInput | StrokeScalarWhereWithAggregatesInput[]
    OR?: StrokeScalarWhereWithAggregatesInput[]
    NOT?: StrokeScalarWhereWithAggregatesInput | StrokeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stroke"> | string
    boardId?: StringWithAggregatesFilter<"Stroke"> | string
    x0?: FloatWithAggregatesFilter<"Stroke"> | number
    y0?: FloatWithAggregatesFilter<"Stroke"> | number
    x1?: FloatWithAggregatesFilter<"Stroke"> | number
    y1?: FloatWithAggregatesFilter<"Stroke"> | number
    color?: StringWithAggregatesFilter<"Stroke"> | string
    width?: FloatWithAggregatesFilter<"Stroke"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Stroke"> | Date | string
  }

  export type BoardCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    strokes?: StrokeCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    strokes?: StrokeUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strokes?: StrokeUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    strokes?: StrokeUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type BoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeCreateInput = {
    id?: string
    x0: number
    y0: number
    x1: number
    y1: number
    color: string
    width: number
    createdAt?: Date | string
    board: BoardCreateNestedOneWithoutStrokesInput
  }

  export type StrokeUncheckedCreateInput = {
    id?: string
    boardId: string
    x0: number
    y0: number
    x1: number
    y1: number
    color: string
    width: number
    createdAt?: Date | string
  }

  export type StrokeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x0?: FloatFieldUpdateOperationsInput | number
    y0?: FloatFieldUpdateOperationsInput | number
    x1?: FloatFieldUpdateOperationsInput | number
    y1?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneRequiredWithoutStrokesNestedInput
  }

  export type StrokeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    x0?: FloatFieldUpdateOperationsInput | number
    y0?: FloatFieldUpdateOperationsInput | number
    x1?: FloatFieldUpdateOperationsInput | number
    y1?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeCreateManyInput = {
    id?: string
    boardId: string
    x0: number
    y0: number
    x1: number
    y1: number
    color: string
    width: number
    createdAt?: Date | string
  }

  export type StrokeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    x0?: FloatFieldUpdateOperationsInput | number
    y0?: FloatFieldUpdateOperationsInput | number
    x1?: FloatFieldUpdateOperationsInput | number
    y1?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    boardId?: StringFieldUpdateOperationsInput | string
    x0?: FloatFieldUpdateOperationsInput | number
    y0?: FloatFieldUpdateOperationsInput | number
    x1?: FloatFieldUpdateOperationsInput | number
    y1?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StrokeListRelationFilter = {
    every?: StrokeWhereInput
    some?: StrokeWhereInput
    none?: StrokeWhereInput
  }

  export type StrokeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoardScalarRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type StrokeCountOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    x0?: SortOrder
    y0?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    color?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
  }

  export type StrokeAvgOrderByAggregateInput = {
    x0?: SortOrder
    y0?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    width?: SortOrder
  }

  export type StrokeMaxOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    x0?: SortOrder
    y0?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    color?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
  }

  export type StrokeMinOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    x0?: SortOrder
    y0?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    color?: SortOrder
    width?: SortOrder
    createdAt?: SortOrder
  }

  export type StrokeSumOrderByAggregateInput = {
    x0?: SortOrder
    y0?: SortOrder
    x1?: SortOrder
    y1?: SortOrder
    width?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StrokeCreateNestedManyWithoutBoardInput = {
    create?: XOR<StrokeCreateWithoutBoardInput, StrokeUncheckedCreateWithoutBoardInput> | StrokeCreateWithoutBoardInput[] | StrokeUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: StrokeCreateOrConnectWithoutBoardInput | StrokeCreateOrConnectWithoutBoardInput[]
    createMany?: StrokeCreateManyBoardInputEnvelope
    connect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
  }

  export type StrokeUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<StrokeCreateWithoutBoardInput, StrokeUncheckedCreateWithoutBoardInput> | StrokeCreateWithoutBoardInput[] | StrokeUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: StrokeCreateOrConnectWithoutBoardInput | StrokeCreateOrConnectWithoutBoardInput[]
    createMany?: StrokeCreateManyBoardInputEnvelope
    connect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StrokeUpdateManyWithoutBoardNestedInput = {
    create?: XOR<StrokeCreateWithoutBoardInput, StrokeUncheckedCreateWithoutBoardInput> | StrokeCreateWithoutBoardInput[] | StrokeUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: StrokeCreateOrConnectWithoutBoardInput | StrokeCreateOrConnectWithoutBoardInput[]
    upsert?: StrokeUpsertWithWhereUniqueWithoutBoardInput | StrokeUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: StrokeCreateManyBoardInputEnvelope
    set?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    disconnect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    delete?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    connect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    update?: StrokeUpdateWithWhereUniqueWithoutBoardInput | StrokeUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: StrokeUpdateManyWithWhereWithoutBoardInput | StrokeUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: StrokeScalarWhereInput | StrokeScalarWhereInput[]
  }

  export type StrokeUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<StrokeCreateWithoutBoardInput, StrokeUncheckedCreateWithoutBoardInput> | StrokeCreateWithoutBoardInput[] | StrokeUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: StrokeCreateOrConnectWithoutBoardInput | StrokeCreateOrConnectWithoutBoardInput[]
    upsert?: StrokeUpsertWithWhereUniqueWithoutBoardInput | StrokeUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: StrokeCreateManyBoardInputEnvelope
    set?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    disconnect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    delete?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    connect?: StrokeWhereUniqueInput | StrokeWhereUniqueInput[]
    update?: StrokeUpdateWithWhereUniqueWithoutBoardInput | StrokeUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: StrokeUpdateManyWithWhereWithoutBoardInput | StrokeUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: StrokeScalarWhereInput | StrokeScalarWhereInput[]
  }

  export type BoardCreateNestedOneWithoutStrokesInput = {
    create?: XOR<BoardCreateWithoutStrokesInput, BoardUncheckedCreateWithoutStrokesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutStrokesInput
    connect?: BoardWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardUpdateOneRequiredWithoutStrokesNestedInput = {
    create?: XOR<BoardCreateWithoutStrokesInput, BoardUncheckedCreateWithoutStrokesInput>
    connectOrCreate?: BoardCreateOrConnectWithoutStrokesInput
    upsert?: BoardUpsertWithoutStrokesInput
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutStrokesInput, BoardUpdateWithoutStrokesInput>, BoardUncheckedUpdateWithoutStrokesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StrokeCreateWithoutBoardInput = {
    id?: string
    x0: number
    y0: number
    x1: number
    y1: number
    color: string
    width: number
    createdAt?: Date | string
  }

  export type StrokeUncheckedCreateWithoutBoardInput = {
    id?: string
    x0: number
    y0: number
    x1: number
    y1: number
    color: string
    width: number
    createdAt?: Date | string
  }

  export type StrokeCreateOrConnectWithoutBoardInput = {
    where: StrokeWhereUniqueInput
    create: XOR<StrokeCreateWithoutBoardInput, StrokeUncheckedCreateWithoutBoardInput>
  }

  export type StrokeCreateManyBoardInputEnvelope = {
    data: StrokeCreateManyBoardInput | StrokeCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type StrokeUpsertWithWhereUniqueWithoutBoardInput = {
    where: StrokeWhereUniqueInput
    update: XOR<StrokeUpdateWithoutBoardInput, StrokeUncheckedUpdateWithoutBoardInput>
    create: XOR<StrokeCreateWithoutBoardInput, StrokeUncheckedCreateWithoutBoardInput>
  }

  export type StrokeUpdateWithWhereUniqueWithoutBoardInput = {
    where: StrokeWhereUniqueInput
    data: XOR<StrokeUpdateWithoutBoardInput, StrokeUncheckedUpdateWithoutBoardInput>
  }

  export type StrokeUpdateManyWithWhereWithoutBoardInput = {
    where: StrokeScalarWhereInput
    data: XOR<StrokeUpdateManyMutationInput, StrokeUncheckedUpdateManyWithoutBoardInput>
  }

  export type StrokeScalarWhereInput = {
    AND?: StrokeScalarWhereInput | StrokeScalarWhereInput[]
    OR?: StrokeScalarWhereInput[]
    NOT?: StrokeScalarWhereInput | StrokeScalarWhereInput[]
    id?: StringFilter<"Stroke"> | string
    boardId?: StringFilter<"Stroke"> | string
    x0?: FloatFilter<"Stroke"> | number
    y0?: FloatFilter<"Stroke"> | number
    x1?: FloatFilter<"Stroke"> | number
    y1?: FloatFilter<"Stroke"> | number
    color?: StringFilter<"Stroke"> | string
    width?: FloatFilter<"Stroke"> | number
    createdAt?: DateTimeFilter<"Stroke"> | Date | string
  }

  export type BoardCreateWithoutStrokesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type BoardUncheckedCreateWithoutStrokesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type BoardCreateOrConnectWithoutStrokesInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutStrokesInput, BoardUncheckedCreateWithoutStrokesInput>
  }

  export type BoardUpsertWithoutStrokesInput = {
    update: XOR<BoardUpdateWithoutStrokesInput, BoardUncheckedUpdateWithoutStrokesInput>
    create: XOR<BoardCreateWithoutStrokesInput, BoardUncheckedCreateWithoutStrokesInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutStrokesInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutStrokesInput, BoardUncheckedUpdateWithoutStrokesInput>
  }

  export type BoardUpdateWithoutStrokesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateWithoutStrokesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeCreateManyBoardInput = {
    id?: string
    x0: number
    y0: number
    x1: number
    y1: number
    color: string
    width: number
    createdAt?: Date | string
  }

  export type StrokeUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    x0?: FloatFieldUpdateOperationsInput | number
    y0?: FloatFieldUpdateOperationsInput | number
    x1?: FloatFieldUpdateOperationsInput | number
    y1?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    x0?: FloatFieldUpdateOperationsInput | number
    y0?: FloatFieldUpdateOperationsInput | number
    x1?: FloatFieldUpdateOperationsInput | number
    y1?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StrokeUncheckedUpdateManyWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string
    x0?: FloatFieldUpdateOperationsInput | number
    y0?: FloatFieldUpdateOperationsInput | number
    x1?: FloatFieldUpdateOperationsInput | number
    y1?: FloatFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}