export function generateSecretSantaWithExclusions(
  userIds: string[],
  exclusions: Array<[string, string]> = []
): { [key: string]: string } {
  if (userIds.length < 2) {
    throw new Error("At least two participants are required.");
  }

  const isValidPairing = (
    giver: string,
    receiver: string,
    exclusionSet: Set<string>
  ) => {
    return giver !== receiver && !exclusionSet.has(`${giver}->${receiver}`);
  };

  // Convert exclusions list to a Set for fast lookup
  const exclusionSet = new Set<string>();
  for (const [a, b] of exclusions) {
    exclusionSet.add(`${a}->${b}`);
    exclusionSet.add(`${b}->${a}`);
  }

  const maxAttempts = 10000;
  let attempts = 0;

  while (attempts++ < maxAttempts) {
    const shuffled = [...userIds];

    // Fisher-Yates Shuffle
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    let valid = true;
    for (let i = 0; i < userIds.length; i++) {
      if (!isValidPairing(userIds[i], shuffled[i], exclusionSet)) {
        valid = false;
        break;
      }
    }

    if (valid) {
      const pairings: { [key: string]: string } = {};
      for (let i = 0; i < userIds.length; i++) {
        pairings[userIds[i]] = shuffled[i];
      }
      return pairings;
    }
  }

  throw new Error(
    "Unable to generate a valid Secret Santa pairing with given exclusions."
  );
}
