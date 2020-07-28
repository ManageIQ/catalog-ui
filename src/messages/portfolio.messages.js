const { defineMessages } = require('react-intl');

const portfolioMessages = defineMessages({
  removeItemsNotification: {
    id: 'portfolio.notifications.remove.portfolio-items',
    defaultMessage:
      'You have removed {count, number} {count, plural, one {product} other {products} } from the {portfolioName} portfolio. <a>Undo</a> if this was a mistake.' // eslint-disable-line max-len
  },
  removePortfolioNotification: {
    id: 'portfolio.notifications.remove.portfolio',
    defaultMessage:
      'The portfolio was removed successfully. You can <a>Undo</a> this action if this was a mistake.'
  },
  modalCreateTitle: {
    id: 'portfolio.modal.add.title',
    defaultMessage: 'Create portfolio'
  },
  modalCreateSubmit: {
    id: 'portfolio.modal.add.create',
    defaultMessage: 'Create'
  },
  modalEditTitle: {
    id: 'portfolio.modal.edit.title',
    defaultMessage: 'Edit portfolio'
  },
  addProducts: {
    id: 'portfolio.empty.add.products',
    defaultMessage: 'Add products'
  },
  emptyNoProducts: {
    id: 'portfolio.empty.no-products',
    defaultMessage: 'No products in your portfolio'
  },
  portfoliosPlaceholder: {
    id: 'portfolios.filters.placeholder',
    defaultMessage: 'Filter by portfolio'
  },
  portfoliosNoData: {
    id: 'portfolios.empty.noData.title',
    defaultMessage: 'No portfolios'
  },
  portfoliosNoDataDescription: {
    id: 'portfolios.empty.noData.description',
    defaultMessage: 'No portfolios match your filter criteria.'
  },
  portfolioRemoveDescription: {
    id: 'portfolio.remove.modal.description',
    defaultMessage:
      'This action will permanently delete portfolio {name} and its data.'
  },
  portfolioRemoveTitle: {
    id: 'portfolio.remove.modal.title',
    defaultMessage: 'Delete Portfolio?'
  },
  portfolioRemoveConfirm: {
    id: 'portfolio.remove.modal.confirm',
    defaultMessage: 'Confirm'
  },
  portfolioRemoveCancel: {
    id: 'portfolio.remove.modal.cancel',
    defaultMessage: 'Cancel'
  },
  portfolioShareUnknown: {
    id: 'portfolio.share.modal.option.unknown',
    defaultMessage: 'Unknown'
  },
  portfolioSharePermissions: {
    id: 'portfolio.share.modal.permissions',
    defaultMessage: 'Select the share permissions'
  },
  portfolioShareGroups: {
    id: 'portfolio.share.modal.groups',
    defaultMessage: 'Select a group'
  },
  portfolioShareTitle: {
    id: 'portfolio.share.modal.title',
    defaultMessage: 'Share portfolio'
  },
  portfolioShareApply: {
    id: 'portfolio.share.modal.apply',
    defaultMessage: 'Apply'
  },
  portfolioShareDescription: {
    id: 'portfolio.share.modal.description',
    defaultMessage: 'Share <strong>{name}</strong> portfolio'
  },
  addProducstPlatformTitle: {
    id: 'portfolio.add.platform.title.empty',
    defaultMessage: 'Please choose platform'
  },
  addProducstPlatformDescription: {
    id: 'portfolio.add.platform.description.empty',
    defaultMessage:
      'In order to select products for your portfolio you must choose platform first'
  },
  addProducstFilterTitle: {
    id: 'portfolio.add.platform.filter.empty',
    defaultMessage: 'No products match filter parameters'
  },
  copyItemTitle: {
    id: 'portfolio.item.copy',
    defaultMessage: 'Copy product'
  },
  portfolioItemSurvey: {
    id: 'portfolio.item.detail.actions.survey',
    defaultMessage: 'Edit survey'
  },
  portfolioItemOrder: {
    id: 'portfolio.item.detail.actions.order',
    defaultMessage: 'Order'
  },
  portfolioItemIconTitle: {
    id: 'portfolio.item.icon.upload.notification',
    defaultMessage: 'Icon upload error'
  },
  portfolioItemOverview: {
    id: 'portfolio.item.detail.overview',
    defaultMessage: 'Overview'
  },
  portfolioItemSupport: {
    id: 'portfolio.item.detail.support',
    defaultMessage: 'Learn more'
  },
  portfolioItemDocumentation: {
    id: 'portfolio.item.detail.documentation',
    defaultMessage: 'Documentation'
  },
  portfolioItemDocLink: {
    id: 'portfolio.item.detail.doclink',
    defaultMessage: 'Doc link'
  },
  restoreSurvey: {
    id: 'portfolio.item.survey.restore',
    defaultMessage: 'Restore to Ansible Tower version'
  },
  surveyTitle: {
    id: 'portfolio.item.survey.edit',
    defaultMessage: 'Editing survey: {name}'
  },
  sourceUnavaiable: {
    id: 'portfolio.detail.alert.source.unavailable',
    defaultMessage: 'The platform for this product is unavailable'
  },
  objectUnavaiable: {
    id: 'portfolio.detail.alert.unavailable',
    defaultMessage: 'The {object} for this product is no longer available'
  },
  backToProducts: {
    id: 'portfolio.detail.back-to-products',
    defaultMessage: 'Back to products'
  },
  editProduct: {
    id: 'portfolio.item.edit.title',
    defaultMessage: 'Edit product'
  },
  shareTooltip: {
    id: 'portfolio.share.add.tooltip',
    defaultMessage: 'Share portfolio with selected group and permissions.'
  },
  shareErrorMissingGroup: {
    id: 'portfolio.share.add.missing-group',
    defaultMessage: 'Select group to share portfolio.'
  },
  shareErrorMissingPermission: {
    id: 'portfolio.share.add.missing-permission',
    defaultMessage: 'Assign permissions to selected group.'
  },
  shareErrorMissingData: {
    id: 'portfolio.share.add.missing-data',
    defaultMessage: 'Choose group and permissions.'
  },
  shareDuplicate: {
    id: 'portfolio.share.add.duplicate',
    defaultMessage: 'Portfolio is already shared with this group.'
  },
  noShares: {
    id: 'portfolio.share.add.no-shares',
    defaultMessage: 'To share portfolio select a group and permissions'
  },
  shareGroupsAccess: {
    id: 'share.groups.access',
    defaultMessage: 'Groups with access'
  },
  shareSuccessTitle: {
    id: 'share.notification.success.title',
    defaultMessage: 'Portfolio sharing settings were updated'
  }
});

export default portfolioMessages;