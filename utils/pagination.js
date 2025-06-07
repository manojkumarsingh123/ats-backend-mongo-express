export function getPagination(params) {
  const page = params.page ? parseInt(params.page, 10) : null;
  const limit = params.limit ? parseInt(params.limit, 10) : null;
  const offset = (page - 1) * limit;

  return { page, limit, offset };
}

export function getPaginationResponse(data, count, page, limit) {
  return {
    data,
    totalRecords: count,
    currentPage: page,
    totalPages: Math.ceil(count / limit),
  };
}
