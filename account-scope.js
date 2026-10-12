// Public client configuration stays in the recovered app. No account credentials
// or session tokens are embedded in these source files.
export function scopeWritesToAccount(client) {
  let userId = null;
  client.auth.onAuthStateChange((_event, session) => {
    userId = session?.user?.id ?? null;
  });
  client.auth.getSession().then(({ data }) => {
    userId = data.session?.user?.id ?? null;
  });
  const ownedTables = new Set([
    'settings', 'categories', 'sale_channels', 'ingredients', 'packagings',
    'recipes', 'sale_variations', 'expenses',
  ]);
  const originalFrom = client.from.bind(client);
  client.from = table => {
    const query = originalFrom(table);
    if (!ownedTables.has(table)) return query;
    for (const method of ['insert', 'upsert']) {
      const original = query[method].bind(query);
      query[method] = (values, options) => {
        if (!userId) throw new Error('Entre na sua conta antes de salvar.');
        const scope = row => ({ ...row, user_id: userId });
        return original(Array.isArray(values) ? values.map(scope) : scope(values), options);
      };
    }
    return query;
  };
}
