import { Interface } from '@ethersproject/abi';
import { Currency, Token } from '@uniswap/sdk-core';
export declare enum ApprovalTypes {
    NOT_REQUIRED = 0,
    MAX = 1,
    MAX_MINUS_ONE = 2,
    ZERO_THEN_MAX = 3,
    ZERO_THEN_MAX_MINUS_ONE = 4
}
export declare abstract class ApproveAndCall {
    static INTERFACE: Interface;
    /**
     * Cannot be constructed.
     */
    private constructor();
    static encodeApproveMax(token: Token): string;
    static encodeApproveMaxMinusOne(token: Token): string;
    static encodeApproveZeroThenMax(token: Token): string;
    static encodeApproveZeroThenMaxMinusOne(token: Token): string;
    static encodeCallPositionManager(calldatas: string[]): string;
    static encodeApprove(token: Currency, approvalType: ApprovalTypes): string;
}
