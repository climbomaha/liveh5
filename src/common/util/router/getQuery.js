export default function getQuery() {
    return new URLSearchParams(this.props.location.search)
}