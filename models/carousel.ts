export type PaginateHandler = (dir: number) => void;

export interface CarouselProps {
  page: number;
  direction: number;
  paginate: PaginateHandler;
}
