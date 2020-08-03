import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Modal,
  Button,
  Text,
  TextContent,
  TextVariants,
  Spinner,
  Title
} from '@patternfly/react-core';
import { useIntl } from 'react-intl';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import {
  removeOrderProcess,
  removeOrderProcesses,
  fetchOrderProcess
} from '../../redux/actions/order-process-actions';
import useQuery from '../../utilities/use-query';
import { ORDER_PROCESSES_ROUTE } from '../../constants/routes';
import useOrderProcess from '../../utilities/use-order-process';
import { FormItemLoader } from '../../presentational-components/shared/loader-placeholders';
import orderProcessMessages from '../../messages/order-processes.messages';
import actionMessages from '../../messages/actions.messages';

const RemoveOrderProcessModal = ({
  ids = [],
  fetchData,
  setSelectedOrderProcesses
}) => {
  const dispatch = useDispatch();
  const [fetchedOrderProcess, setFetchedOrderProcess] = useState();
  const [submitting, setSubmitting] = useState(false);
  const { push } = useHistory();
  const [{ orderProcess: orderProcessId }] = useQuery(['order-process']);

  const finalId = orderProcessId || (ids.length === 1 && ids[0]);

  const intl = useIntl();
  const orderProcess = useOrderProcess(finalId);

  useEffect(() => {
    if (finalId && !orderProcess) {
      dispatch(fetchOrderProcess(finalId))
        .then(({ value }) => setFetchedOrderProcess(value))
        .catch(() => push(ORDER_PROCESSES_ROUTE));
    }
  }, []);

  if (!finalId && ids.length === 0) {
    return null;
  }

  const removeWf = () =>
    (finalId
      ? dispatch(removeOrderProcess(finalId, intl))
      : dispatch(removeOrderProcesses(ids, intl))
    )
      .catch(() => setSubmitting(false))
      .then(() => push(ORDER_PROCESSES_ROUTE))
      .then(() => setSelectedOrderProcesses([]))
      .then(() => fetchData());

  const onCancel = () => push(ORDER_PROCESSES_ROUTE);

  const onSubmit = () => {
    setSubmitting(true);
    return removeWf();
  };

  const name = (
    <b key="remove-key">
      {finalId ? (
        (fetchedOrderProcess && fetchedOrderProcess.name) ||
        (orderProcess && orderProcess.name)
      ) : (
        <React.Fragment>
          {ids.length}{' '}
          {intl.formatMessage(orderProcessMessages.approvalProcesses)}
        </React.Fragment>
      )}
    </b>
  );

  const isLoading = finalId && !orderProcess && !fetchedOrderProcess;

  return (
    <Modal
      isOpen
      variant="small"
      aria-label={intl.formatMessage(
        orderProcessMessages.removeProcessAriaLabel,
        { count: finalId ? 1 : ids.length }
      )}
      header={
        <Title size="2xl" headingLevel="h1">
          <ExclamationTriangleIcon
            size="sm"
            fill="#f0ab00"
            className="pf-u-mr-sm"
          />
          {intl.formatMessage(orderProcessMessages.removeProcessTitle, {
            count: finalId ? 1 : ids.length
          })}
        </Title>
      }
      onClose={onCancel}
      actions={[
        <Button
          id="submit-remove-order-process"
          key="submit"
          variant="danger"
          type="button"
          isDisabled={submitting}
          onClick={onSubmit}
        >
          {submitting ? (
            <React.Fragment>
              <Spinner size="sm" className="pf-u-mr-md" />
              {intl.formatMessage(actionMessages.deleting)}
            </React.Fragment>
          ) : (
            intl.formatMessage(actionMessages.delete)
          )}
        </Button>,
        <Button
          id="cancel-remove-order-process"
          key="cancel"
          variant="link"
          type="button"
          isDisabled={submitting}
          onClick={onCancel}
        >
          {intl.formatMessage(actionMessages.cancel)}
        </Button>
      ]}
    >
      <TextContent>
        <Text component={TextVariants.p}>
          {isLoading ? (
            <FormItemLoader />
          ) : (
            intl.formatMessage(orderProcessMessages.removeProcessDescription, {
              name
            })
          )}
        </Text>
      </TextContent>
    </Modal>
  );
};

RemoveOrderProcessModal.propTypes = {
  fetchData: PropTypes.func.isRequired,
  setSelectedOrderProcesses: PropTypes.func.isRequired,
  ids: PropTypes.array
};

export default RemoveOrderProcessModal;
