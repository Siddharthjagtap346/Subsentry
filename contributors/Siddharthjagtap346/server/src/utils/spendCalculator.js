import { BILLING_CYCLES } from '../constants/subscription.constants.js';

/**
 * Convert a subscription amount into YEARLY value
 */
export const getYearlyAmount = (subscription) => {
  const { amount, billingCycle } = subscription;

  switch (billingCycle) {
    case BILLING_CYCLES.MONTHLY:
      return amount * 12;

    case BILLING_CYCLES.WEEKLY:
      return amount * 52;

    case BILLING_CYCLES.YEARLY:
      return amount;

    default:
      return 0;
  }
};

/**
 * Calculate total yearly spend
 */
export const calculateYearlySpend = (subscriptions = []) => {
  return subscriptions.reduce(
    (total, sub) => total + getYearlyAmount(sub),
    0
  );
};

/**
 * Calculate total monthly spend (needed for meta)
 */
export const getMonthlyAmount = (subscription) => {
  const { amount, billingCycle } = subscription;

  switch (billingCycle) {
    case BILLING_CYCLES.MONTHLY:
      return amount;

    case BILLING_CYCLES.YEARLY:
      return amount / 12;

    case BILLING_CYCLES.WEEKLY:
      return (amount * 52) / 12;

    default:
      return 0;
  }
};

export const calculateMonthlySpend = (subscriptions = []) => {
  return subscriptions.reduce(
    (total, sub) => total + getMonthlyAmount(sub),
    0
  );
};
