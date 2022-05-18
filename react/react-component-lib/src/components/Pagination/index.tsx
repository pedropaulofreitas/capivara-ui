import classNames from "classnames/bind";

interface IPagination {
  size?: "small" | "medium" | "large";
  current?: number;
  total: number;
  next?: string;
  previous?: string;
  showPrevNext?: boolean;
  showFirstLast?: boolean;
  firstNumber?: number;
  align?: "" | "centered" | "right";
  rounded?: boolean;
  onChange: (s: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  current = 3,
  total,
  next = "Next",
  previous = "Previous",
  showPrevNext = true,
  showFirstLast = true,
  firstNumber = 1,
  size = "",
  align = "",
  rounded = false,
  onChange,
  ...rest
}) => {
  if (total <= 1 || current > total) {
    return null;
  }
  const getFirstPage = (last: number) => {
    if (current === 1) {
      return 1;
    }

    const minPage = last - firstNumber * 2;
    const page = Math.min(current - firstNumber, minPage);

    return page <= 0 ? 1 : page;
  };

  const getLastPage = () => {
    if (current === total) {
      return total;
    }

    const maxPage = firstNumber * 2 + 1;
    const page = Math.max(current + firstNumber, maxPage);
    return page > total ? total : page;
  };

  const lastPage = getLastPage();
  const firstPage = getFirstPage(lastPage);

  const PaginationClasses = classNames({
    pagination: true,
    [`is-${size}`]: !!size,
    [`is-${align}`]: !!align,
    "is-rounded": rounded,
  });

  return (
    <nav
      className={PaginationClasses}
      role="navigation"
      aria-label="pagination"
      {...rest}
    >
      {showPrevNext && (
        <>
          <a
            role="button"
            tabIndex={0}
            onClick={() => {
              onChange(current - 1);
            }}
            className="pagination-previous"
          >
            {previous}
          </a>
          <a
            role="button"
            tabIndex={0}
            onClick={() => {
              onChange(current + 1);
            }}
            className="pagination-next"
          >
            {next}
          </a>
        </>
      )}
      {firstNumber > 0 && (
        <>
          <ul className="pagination-list">
            {showFirstLast && current !== 1 && firstPage !== 1 && (
              <>
                <li>
                  <a
                    role="button"
                    tabIndex={0}
                    className="pagination-link"
                    onClick={() => {
                      onChange(1);
                    }}
                    aria-label="Page 1"
                    aria-current="page"
                  >
                    1
                  </a>
                </li>
                <li>
                  <span className="pagination-ellipsis">&hellip;</span>
                </li>
              </>
            )}
            {Array(lastPage - firstPage + 1)
              .fill(0)
              .map((_, index) => {
                return (
                  <li key={index.toString()}>
                    <a
                      role="button"
                      tabIndex={0}
                      className={classNames("pagination-link", {
                        "is-current": current === index + firstPage,
                      })}
                      onClick={
                        current === firstPage + index
                          ? undefined
                          : () => {
                              onChange(firstPage + index);
                            }
                      }
                      aria-label={`Page ${index + firstPage}`}
                      aria-current="page"
                    >
                      {index + firstPage}
                    </a>
                  </li>
                );
              })}
            {showFirstLast && current !== lastPage && total !== lastPage && (
              <>
                <li>
                  <span className="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                  <a
                    role="button"
                    tabIndex={0}
                    className="pagination-link"
                    onClick={() => {
                      onChange(total);
                    }}
                    aria-label={`Page ${total}`}
                    aria-current="page"
                  >
                    {total}
                  </a>
                </li>
              </>
            )}
          </ul>
        </>
      )}
    </nav>
  );
};

export default Pagination;
