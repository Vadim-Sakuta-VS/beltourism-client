export const selectDeletingPageNumber = (state)=> state.admin.deleting.page;
export const selectDeletingServices = (state)=> state.admin.deleting.services;
export const selectUsersBookingServicesPage = (state) => state.admin.booking.page;
export const selectUsersBookingServicesLoading = (state) => state.admin.booking.isLoading;
export const selectUsersBookingServicesData = (state) => state.admin.booking.data;
export const selectUsersCommentsServicesPage = (state) => state.admin.comments.page;
export const selectUsersCommentsServicesLoading = (state) => state.admin.comments.isLoading;
export const selectUsersCommentsServicesData = (state) => state.admin.comments.data;